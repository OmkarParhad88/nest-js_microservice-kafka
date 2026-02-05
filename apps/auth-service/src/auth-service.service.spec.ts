import { Test, TestingModule } from '@nestjs/testing';
import { AuthServiceService } from './auth-service.service';
import { DatabaseService, Prisma } from '@app/database';
import { JwtService } from '@nestjs/jwt';
import { KAFKA_SERVICE, KAFKA_TOPIC } from '@app/kafka';
import { ClientKafka } from '@nestjs/microservices';
import { ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt', () => ({
  hash: jest.fn(),
  compare: jest.fn(),
}));

jest.mock('@app/database', () => {
  const { z } = require('zod');
  const mockSchema = z.object({});
  // Proxy to handle any schema exports (UserCreateInputObjectZodSchema, EventCreateInputObjectZodSchema, etc.)
  return new Proxy(
    {
      DatabaseService: class {},
      Prisma: {},
    },
    {
      get: (target, prop) => {
        if (prop in target) return target[prop];
        return mockSchema;
      },
    },
  );
});

describe('AuthServiceService', () => {
  let service: AuthServiceService;
  let dbService: DatabaseService;
  let jwtService: JwtService;
  let kafkaService: ClientKafka;

  const mockDatabaseService = {
    user: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  };

  const mockJwtService = {
    sign: jest.fn(),
  };

  const mockKafkaService = {
    connect: jest.fn(),
    emit: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthServiceService,
        {
          provide: DatabaseService,
          useValue: mockDatabaseService,
        },
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        {
          provide: KAFKA_SERVICE,
          useValue: mockKafkaService,
        },
      ],
    }).compile();

    service = module.get<AuthServiceService>(AuthServiceService);
    dbService = module.get<DatabaseService>(DatabaseService);
    jwtService = module.get<JwtService>(JwtService);
    kafkaService = module.get<ClientKafka>(KAFKA_SERVICE);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('userRegister', () => {
    const createUserDto: Prisma.UserCreateInput = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
    };

    it('should successfully register a user', async () => {
      mockDatabaseService.user.findUnique.mockResolvedValue(null);
      (bcrypt.hash as jest.Mock).mockResolvedValue('hashedPassword');
      mockDatabaseService.user.create.mockResolvedValue({
        id: 'user-id',
        ...createUserDto,
        role: 'USER',
        password: 'hashedPassword',
      } as any);
      mockJwtService.sign.mockReturnValue('jwt-token');

      const result = await service.userRegister(createUserDto);

      expect(dbService.user.findUnique).toHaveBeenCalledWith({ where: { email: createUserDto.email } });
      expect(dbService.user.create).toHaveBeenCalled();
      expect(kafkaService.emit).toHaveBeenCalledWith(KAFKA_TOPIC.USER_REGISTERED, expect.any(Object));
      expect(result).toEqual({
        message: 'User registered successfully',
        data: {
          id: 'user-id',
          name: createUserDto.name,
          email: createUserDto.email,
          token: 'jwt-token',
        },
      });
    });

    it('should throw ConflictException if user already exists', async () => {
      mockDatabaseService.user.findUnique.mockResolvedValue({ id: 'existing-id' } as any);

      await expect(service.userRegister(createUserDto)).rejects.toThrow(ConflictException);
    });
  });

  describe('userLogin', () => {
    const loginDto = {
      email: 'test@example.com',
      password: 'password123',
      name: 'test',
    };

    it('should successfully login a user', async () => {
      const mockUser = {
        id: 'user-id',
        email: 'test@example.com',
        password: 'hashedPassword',
        role: 'USER',
      };
      mockDatabaseService.user.findUnique.mockResolvedValue(mockUser as any);
      (bcrypt.compare as jest.Mock).mockResolvedValue(true);
      mockJwtService.sign.mockReturnValue('jwt-token');

      const result = await service.userLogin(loginDto);

      expect(kafkaService.emit).toHaveBeenCalledWith(KAFKA_TOPIC.USER_LOGIN, expect.any(Object));
      expect(result).toEqual({
        message: 'User logged in successfully',
        data: {
          user: mockUser,
          token: 'jwt-token',
        },
      });
    });

    it('should throw NotFoundException if user not found', async () => {
      mockDatabaseService.user.findUnique.mockResolvedValue(null);

      await expect(service.userLogin(loginDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw UnauthorizedException if password does not match', async () => {
      const mockUser = {
        id: 'user-id',
        email: 'test@example.com',
        password: 'hashedPassword',
      };
      mockDatabaseService.user.findUnique.mockResolvedValue(mockUser as any);
      (bcrypt.compare as jest.Mock).mockResolvedValue(false);

      await expect(service.userLogin(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('getProfile', () => {
    it('should return user profile', async () => {
      const mockUser = {
        id: 'user-id',
        name: 'Test User',
        email: 'test@example.com',
        role: 'USER',
      };
      mockDatabaseService.user.findUnique.mockResolvedValue(mockUser as any);

      const result = await service.getProfile('user-id');

      expect(result).toEqual({
        message: 'User profile fetched successfully',
        data: mockUser,
      });
    });

    it('should throw NotFoundException if user not found', async () => {
      mockDatabaseService.user.findUnique.mockResolvedValue(null);

      await expect(service.getProfile('user-id')).rejects.toThrow(NotFoundException);
    });
  });
});

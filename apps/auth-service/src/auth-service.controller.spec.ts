import { Test, TestingModule } from '@nestjs/testing';
import { AuthServiceController } from './auth-service.controller';
import { AuthServiceService } from './auth-service.service';
import { CreateUserDto, LoginDto } from '@app/shared/dto';
import { AuthGuard } from '@nestjs/passport'; 

jest.mock('@app/database', () => {
    const { z } = require('zod');
    const mockSchema = z.object({});
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

describe('AuthServiceController', () => {
  let controller: AuthServiceController;
  let service: AuthServiceService;

  const mockAuthServiceService = {
    userRegister: jest.fn(),
    userLogin: jest.fn(),
    getProfile: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthServiceController],
      providers: [
        {
          provide: AuthServiceService,
          useValue: mockAuthServiceService,
        },
      ],
    })
      .overrideGuard(AuthGuard('jwt'))
      .useValue({ canActivate: jest.fn(() => true) })
      .compile();

    controller = module.get<AuthServiceController>(AuthServiceController);
    service = module.get<AuthServiceService>(AuthServiceService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('userRegister', () => {
    it('should register a user', async () => {
      const dto: CreateUserDto = {
        email: 'test@example.com',
        password: 'password',
        name: 'name',
      };
      const result = { message: 'success', data: { ...dto, id: '1', token: 'token' } };
      mockAuthServiceService.userRegister.mockResolvedValue(result);

      expect(await controller.userRegister(dto)).toBe(result);
      expect(service.userRegister).toHaveBeenCalledWith(dto);
    });
  });

  describe('userLogin', () => {
    it('should login a user', async () => {
      const dto: LoginDto = { email: 'test@example.com', password: 'password', name: 'test' };
      const result = { message: 'success', data: { user: {}, token: 'token' } };
      mockAuthServiceService.userLogin.mockResolvedValue(result);

      expect(await controller.userLogin(dto)).toBe(result);
      expect(service.userLogin).toHaveBeenCalledWith(dto);
    });
  });

  describe('getProfile', () => {
    it('should get profile', async () => {
      const req = { user: { userId: '1' } };
      const result = { message: 'success', data: { id: '1', email: 'test@example.com' } };
      mockAuthServiceService.getProfile.mockResolvedValue(result);

      expect(await controller.getProfile(req)).toBe(result);
      expect(service.getProfile).toHaveBeenCalledWith('1');
    });
  });
});

import { KAFKA_SERVICE, KAFKA_TOPIC } from '@app/kafka';
import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  OnModuleInit,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { DatabaseService, Prisma } from '@app/database';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginType } from '@app/shared/types';

@Injectable()
export class AuthServiceService implements OnModuleInit {
  constructor(
    @Inject(KAFKA_SERVICE) private readonly kafkaService: ClientKafka,
    private readonly dbService: DatabaseService,
    private jwtService: JwtService,
  ) {}

  async onModuleInit() {
    await this.kafkaService.connect();
  }

  async userRegister(data: Prisma.UserCreateInput): Promise<{ message: string; data: any }> {
    let user = await this.dbService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (user) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword: string = await bcrypt.hash(data.password, 10);
    data.password = hashedPassword;
    user = await this.dbService.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    this.kafkaService.emit(KAFKA_TOPIC.USER_REGISTERED, {
      userId: user.id,
      email: user.email,
      name: user.name,
      timestamp: new Date().getTime(),
    });

    const token: string = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      message: 'User registered successfully',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        token,
      },
    };
  }

  async userLogin(data: LoginType): Promise<{ message: string; data: any }> {
    const user = await this.dbService.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordMatched = await bcrypt.compare(data.password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token: string = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    this.kafkaService.emit(KAFKA_TOPIC.USER_LOGIN, {
      userId: user.id,
      timestamp: new Date().getTime(),
    });

    return {
      message: 'User logged in successfully',
      data: {
        user,
        token,
      },
    };
  }

  async getProfile(userId: string): Promise<{ message: string; data: any }> {
    const user = await this.dbService.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return {
      message: 'User profile fetched successfully',
      data: user,
    };
  }
}

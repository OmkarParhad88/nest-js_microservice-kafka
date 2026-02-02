import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  UseGuards,
  HttpException,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto } from '@app/shared';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.authService.register(createUserDto);
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error communicating with auth service',
        error.response?.status || 500,
      );
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    try {
      return await this.authService.login(loginDto);
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error communicating with auth service',
        error.response?.status || 500,
      );
    }
  }

  @Get('profile')
  async getProfile(@Headers('authorization') authHeader: string) {
    try {
      return await this.authService.getProfile(authHeader);
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error communicating with auth service',
        error.response?.status || 500,
      );
    }
  }
}

import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreateUserDto, LoginDto, SERVICES_PORT } from '@app/shared';

@Injectable()
export class AuthService {
  private readonly authServiceUrl = `http://localhost:${SERVICES_PORT.AUTH_SERVICE}/auth`;

  constructor(private readonly httpService: HttpService) {}

  async register(createUserDto: CreateUserDto) {
    const response = await firstValueFrom(
      this.httpService.post(`${this.authServiceUrl}/register`, createUserDto),
    );
    return response.data;
  }

  async login(loginDto: LoginDto) {
    const response = await firstValueFrom(
      this.httpService.post(`${this.authServiceUrl}/login`, loginDto),
    );
    return response.data;
  }

  async getProfile(authHeader: string) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.authServiceUrl}/profile`, {
        headers: { Authorization: authHeader },
      }),
    );
    return response.data;
  }
}

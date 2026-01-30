import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';

@Controller('auth')
export class AuthServiceController {
  constructor(private readonly authServiceService: AuthServiceService) { }

  @Get()
  getHello(): string {
    return this.authServiceService.getHello();
  }

  @Post('register')
  userRegister(@Body() body: { name: string }) {
    return this.authServiceService.userRegister(body.name);
  }
}

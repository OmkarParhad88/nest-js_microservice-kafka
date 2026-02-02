import { Controller, Post, Body, Req, Get, UseGuards } from '@nestjs/common';
import { AuthServiceService } from './auth-service.service';
import { CreateUserDto, LoginDto } from '@app/shared/dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthServiceController {
  constructor(private readonly authService: AuthServiceService) {}

  @Post('register')
  userRegister(@Body() body: CreateUserDto) {
    return this.authService.userRegister(body);
  }

  @Post('login')
  userLogin(@Body() body: LoginDto) {
    return this.authService.userLogin(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req: { user: { userId: string } }) {
    return this.authService.getProfile(req.user.userId);
  }
}

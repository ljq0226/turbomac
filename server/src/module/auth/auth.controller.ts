import { Body, Controller, Post, Req, Request, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from 'src/common/guards/LocalAuthGuard'
import  { AuthService } from './auth.service'
import  { LoginDto } from './dto/loginDto'
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() user: LoginDto, @Req() req) {
  console.log(' ', user)
    return this.authService.login(req.user)
  }
}

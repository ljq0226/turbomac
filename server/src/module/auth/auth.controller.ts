import { Body, Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from 'src/common/guards/LocalAuthGuard'
import  { AuthService } from './auth.service'
import  { UserAuthDto } from './dto/UserAuthDto'
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }


  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() user: UserAuthDto, @Req() req) {
    return this.authService.login(req.user)
  }

  @Post('register')
  async register(@Body() user: UserAuthDto) {
    return this.authService.register(user)
  }

  @Get()
  test(){
    return 'asd'
  }
}

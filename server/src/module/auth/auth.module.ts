import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { UserModule } from 'src/module/user/user.module'
import { AuthService } from './auth.service'
import { LocalStrategy } from './strategy/local.strategy'
import { jwtConstants } from './constants'
import { AuthController } from './auth.controller'
import { JwtStrategy } from './strategy/jwt.strategy'

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn},
    }),
    PassportModule, 
  ],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports: [AuthService],
})
export class AuthModule { }

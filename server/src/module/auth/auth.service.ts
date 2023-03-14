import { Injectable } from '@nestjs/common'
import { UserService } from 'src/module/user/user.service'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'nestjs-prisma'
@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.prisma.user.findFirst({ where: { username } })
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const userInfo = { username: user.username, sub: user.id }
  console.log(' token:', this.jwtService.sign(userInfo))
    return {
      access_token: this.jwtService.sign(userInfo),
    }
  }
}

import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'nestjs-prisma'
import { UserAuthDto } from './dto/UserAuthDto'

@Injectable()
export class AuthService {
  constructor(
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
    return {
      access_token: this.jwtService.sign(userInfo),
    }
  }

  async register(user: UserAuthDto) {
    const newUser = this.prisma.user.create({ data: user })
    return newUser
  }
}

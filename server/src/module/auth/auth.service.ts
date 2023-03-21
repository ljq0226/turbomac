import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'nestjs-prisma'
import { IMAGE_BASE_URL } from 'src/common/Constant'
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
    const signInfo = { username: user.username, sub: user.id }
    const { password, ...userInfo } = await this.prisma.user.findUnique({ where: { id: user.id } })
    return {
      token: this.jwtService.sign(signInfo),
      userInfo,
      msg: 'Login successful',
    }
  }

  async register(user: UserAuthDto) {
    const newUser = this.prisma.user.create({
      data: {
        ...user,
        avatar: `${IMAGE_BASE_URL}avatar${Math.round(Math.random() * 19 + 1)}.png`,
      },
    })
    return newUser
  }
}

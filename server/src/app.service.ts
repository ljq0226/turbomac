import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) {}

  async getHello() {
    console.log(    await this.prisma.user.findMany()
)
    return await this.prisma.user.findMany()
  }

  async createUser(){
  const user =await this.prisma.user.create({
  data: {
    email: 'elsa@prisma.io',
  }, 
  })
  console.log(user)
  return user
  }

}

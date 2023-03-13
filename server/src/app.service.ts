import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class AppService {

  constructor(private prisma: PrismaService) {}

  async getHello() {
    const users = await this.prisma.user.findMany()
    console.log(users)
    return users
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

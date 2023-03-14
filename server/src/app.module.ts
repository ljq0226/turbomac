import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from 'nestjs-prisma';
@Module({
  imports: [
      PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

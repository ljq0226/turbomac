import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from 'nestjs-prisma';
import { MessagesModule } from './messages/messages.module';
@Module({
  imports: [
      PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
      },
    }),
      MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

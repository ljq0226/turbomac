import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from './module/auth/auth.module';
import { MessagesModule } from './module/messages/messages.module';
import { UserModule } from './module/user/user.module';
@Module({
  imports: [
      PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
      },
    }),
      MessagesModule,
      UserModule,
      AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

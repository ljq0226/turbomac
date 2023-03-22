import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { AuthModule } from './module/auth/auth.module'
import { UserModule } from './module/user/user.module'
import { ChatModule } from './module/chat/chat.module'
import { UploadController } from './module/upload/upload.controller'
@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {},
    }),
    UserModule,
    AuthModule,
    ChatModule,
  ],
  controllers: [UploadController],
  providers: [],
})
export class AppModule {}

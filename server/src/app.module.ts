import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { AuthModule } from "./module/auth/auth.module";
import { UserModule } from "./module/user/user.module";
@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {},
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

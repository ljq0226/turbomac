import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception.fillter';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { ValidationPipe } from '@nestjs/common';
import {logger} from './common/middleware/logger.middleware'


async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalFilters(new HttpExceptionFilter()); //应用过滤器
  app.useGlobalInterceptors(new TransformInterceptor()); //应用拦截器
  app.useGlobalPipes(new ValidationPipe()); //应用管道
  app.use(logger); //应用日志管理

  app.enableCors()
  await app.listen(8080)
}
bootstrap()

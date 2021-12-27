import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // TODO: restrict only fields in DTO
      forbidNonWhitelisted: true, // TODO: if send attr that not exists, this alert
    }),
  );
  await app.listen(3000);
}
bootstrap();

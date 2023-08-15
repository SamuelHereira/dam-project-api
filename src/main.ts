import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './http-exception.filter'; // Importa el filtro de excepciones
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter()); // Usa el filtro de excepciones globalmente
  // Apply body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  await app.listen(3000);
}
bootstrap();

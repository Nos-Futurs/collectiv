import fastifyCookie from '@fastify/cookie';
import helmet from '@fastify/helmet';
import { NestFactory } from '@nestjs/core';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix('api');
  await app.register(fastifyCookie);
  await app.register(helmet); 

  app.enableCors({origin: ["http://localhost:3000"], credentials: true});

  await app.listen(3001);
}
bootstrap();

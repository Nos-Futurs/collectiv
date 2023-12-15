import fastifyCookie from '@fastify/cookie';
import helmet from '@fastify/helmet';
import { NestFactory } from '@nestjs/core';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';
import { ServerConfig } from './config/server.config.js';
import { Logger } from '@nestjs/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  // Configuration
  const config = app.get(ConfigService<{ server: ServerConfig }>);
  const { corsOrigin, host, port } = config.get('server', { infer: true })!;
  console.log(corsOrigin, host, port);

  app.setGlobalPrefix('api');
  await app.register(fastifyCookie);
  await app.register(helmet); 

  app.enableCors({origin: [corsOrigin], credentials: true});

  await app.listen(port || 3001, host).then(async () => {
    Logger.log(`API-Gateway port: ${port} on address: ${await app.getUrl()}`);
  });
}
bootstrap();

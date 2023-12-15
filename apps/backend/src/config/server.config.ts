import { registerAs } from '@nestjs/config';

export interface ServerConfig {
  corsOrigin: string;
  host: string;
  port: number;
}

export default registerAs('server', () => ({
  corsOrigin: process.env.CORS_ORIGIN,
  host: process.env.HOST,
  port: process.env.PORT,
}));

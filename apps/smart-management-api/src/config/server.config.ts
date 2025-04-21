import { registerAs } from '@nestjs/config';

export default registerAs('server', () => ({
  environment: process.env.NODE_ENV || 'development',
  baseUrl: process.env.BASE_URL || 'http://localhost:8000',
  port: process.env.PORT || 8000,
}));

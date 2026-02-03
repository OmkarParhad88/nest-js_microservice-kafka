import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth-service.module';
import { SERVICES_PORT } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  await app.listen(SERVICES_PORT.AUTH_SERVICE);
  console.log(`Auth service is running on http://localhost:${SERVICES_PORT.AUTH_SERVICE}`);
}
bootstrap();

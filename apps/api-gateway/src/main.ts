import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SERVICES_PORT } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(SERVICES_PORT.API_GATEWAY);
}
bootstrap();

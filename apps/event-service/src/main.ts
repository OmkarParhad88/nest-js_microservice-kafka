import { NestFactory } from '@nestjs/core';
import { EventServiceModule } from './event-service.module';
import { SERVICES_PORT } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(EventServiceModule);
  await app.listen(SERVICES_PORT.EVENT_SERVICE);
  console.log(`Event service is running on http://localhost:${SERVICES_PORT.EVENT_SERVICE}`);
}
bootstrap();

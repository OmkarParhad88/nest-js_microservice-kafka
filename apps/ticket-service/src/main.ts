import { NestFactory } from '@nestjs/core';
import { TicketServiceModule } from './ticket-service.module';
import { SERVICES_PORT } from '@app/shared';

async function bootstrap() {
  const app = await NestFactory.create(TicketServiceModule);
  await app.listen(SERVICES_PORT.TICKET_SERVICE);
  console.log(`Ticket service is running on http://localhost:${SERVICES_PORT.TICKET_SERVICE}`);
}
bootstrap();

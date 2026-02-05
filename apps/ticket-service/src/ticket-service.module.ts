import { Module } from '@nestjs/common';
import { TicketServiceController } from './ticket-service.controller';
import { TicketServiceService } from './ticket-service.service';
import { DatabaseModule } from '@app/database';
import { KafkaModule } from '@app/kafka';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { HttpExceptionFilter } from '@app/shared';

@Module({
  imports: [DatabaseModule, KafkaModule.register('ticket-service-consumer-group')],
  controllers: [TicketServiceController],
  providers: [
    TicketServiceService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class TicketServiceModule {}

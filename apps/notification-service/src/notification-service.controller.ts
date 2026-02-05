import { Controller, Get } from '@nestjs/common';
import { NotificationServiceService } from './notification-service.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { KAFKA_TOPIC } from '@app/kafka';
import { Logger } from '@nestjs/common';

@Controller()
export class NotificationServiceController {
  private readonly logger = new Logger(NotificationServiceController.name);

  constructor(private readonly notificationServiceService: NotificationServiceService) {}

  @Get('health')
  getHello(): string {
    return 'Notification service is running';
  }

  @EventPattern(KAFKA_TOPIC.TICKET_PURCHASED)
  async handleTicketPurchased(
    @Payload()
    data: {
      userId: string;
      ticketId: string;
      ticketCode: string;
      eventTitle: string;
      quantity: number;
      totalPrice: number;
    },
  ) {
    this.logger.log(`Ticket purchased: ${JSON.stringify(data)}`);
    await this.notificationServiceService.sendTicketPurchaseEmail(data);
  }

  @EventPattern(KAFKA_TOPIC.TICKET_CANCELLED)
  async handleTicketCanceled(@Payload() data: { ticketId: string; userId: string }) {
    this.logger.log(`Ticket canceled: ${JSON.stringify(data)}`);
    await this.notificationServiceService.sendTicketCenceledEmail(data);
  }

  @EventPattern(KAFKA_TOPIC.USER_REGISTERED)
  async handleUserRegistered(@Payload() data: { userId: string; email: string; name: string }) {
    this.logger.log(`User registered: ${JSON.stringify(data)}`);
    await this.notificationServiceService.sendWelcomeEmail(data);
  }
}

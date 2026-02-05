import { Module } from '@nestjs/common';
import { NotificationServiceController } from './notification-service.controller';
import { NotificationServiceService } from './notification-service.service';
import { EmailService } from './email.service';

@Module({
  imports: [],
  controllers: [NotificationServiceController],
  providers: [NotificationServiceService, EmailService],
})
export class NotificationServiceModule {}

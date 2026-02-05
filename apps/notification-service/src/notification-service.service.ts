import { Injectable, Logger } from '@nestjs/common';
import { EmailService } from './email.service';

@Injectable()
export class NotificationServiceService {
  private readonly logger = new Logger(NotificationServiceService.name);

  constructor(private readonly emailService: EmailService) {}

  async sendWelcomeEmail(data: { userId: string; email?: string; name: string }) {
    this.logger.log(`Sending email to ${data.email}`);
    const email = data.email || 'omkarparhad88pro@example.com';

    const html = `
    <h1>Welcome to Event Ticketing</h1>
    <p>Dear ${data.name},</p>
    <p>Thank you for registering with Event Ticketing. We are excited to have you on board!</p>
    <p>You can now purchase tickets for events and enjoy a seamless experience.</p>
    <p>Best regards,</p>
    <p>Event Ticketing</p>
    `;
    try {
      await this.emailService.sendEmail(email, 'Welcome to Event Ticketing', html);
      this.logger.log(`Email sent to ${email}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${email}`);
    }
  }

  async sendTicketPurchaseEmail(data: {
    userId: string;
    email?: string;
    ticketCode: string;
    eventTitle?: string;
    quantity: number;
    totalPrice: number;
  }) {
    this.logger.log(`Sending email to ${data.email}`);
    const email = data.email || 'omkarparhad88pro@example.com';

    const html = `
    <h1>Ticket Purchased</h1>
    <p>Your ticket has been purchased successfully.</p>
    <div style=" background-color: #f5f5f5; padding: 30px; border-radius: 10px; margin: 20px 0;">
    <p style="font-weight: bold;">Event Title: ${data.eventTitle || 'Your Event'}</p>
    <p style="font-weight: bold;">Quantity: ${data.quantity}</p>
    <p style="font-weight: bold;">Ticket Code: ${data.ticketCode}</p>
    <p style="font-weight: bold;">Total Price: ₹ ${(data.totalPrice / 100).toFixed(2)}</p>
    </div>
    <p>show ticket code in entarance </p>
    <p>Thank you for purchasing tickets for events and enjoy a seamless experience.</p>
    <p>Best regards,</p>
    <p>Event Ticketing</p>
    `;
    try {
      await this.emailService.sendEmail(email, 'Thank you for purchasing tickets', html);
      this.logger.log(`Email sent to ${email}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${email}`);
    }
  }

  async sendTicketCenceledEmail(data: { ticketId: string; userId: string; email?: string }) {
    this.logger.log(`Sending email to ${data.email}`);
    const email = data.email || 'omkarparhad88pro@example.com';

    const html = `
    <h1>Ticket Canceled</h1>
    <p>your ticket has been canceled successfully  as reqeusted.</p>
    <p>refund will be credited to your account within 5-7 business days.</p>
    <p>if you have any questions, please contact our support team.</p>
    <p>Best regards,</p>
    <p>Event Ticketing</p>
    `;
    try {
      await this.emailService.sendEmail(email, 'Ticket Canceled', html);
      this.logger.log(`Email sent to ${email}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${email}`);
    }
  }
  async sendEventCenceledEmail(data: {
    eventId: string;
    eventTitle?: string;
    userId: string;
    email?: string;
  }) {
    this.logger.log(`Sending email to ${data.email}`);
    const email = data.email || 'omkarparhad88pro@example.com';

    const html = `
    <h1>Event Canceled</h1>
    <p>your event "${data.eventTitle || 'Your Event'}" has been canceled successfully  as reqeusted.</p>
    <p>if you have any questions, please contact our support team.</p>
    <p>Best regards,</p>
    <p>Event Ticketing</p>
    `;
    try {
      await this.emailService.sendEmail(email, 'Event Canceled', html);
      this.logger.log(`Email sent to ${email}`);
    } catch (error) {
      this.logger.error(`Failed to send email to ${email}`);
    }
  }
}

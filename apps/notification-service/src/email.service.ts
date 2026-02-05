import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService implements OnModuleInit {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  onModuleInit() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '1025', 10),
      secure: false,
    });

    this.logger.log(`Email service is running on `);
  }

  async sendEmail(to: string, subject: string, html: string): Promise<void> {
    this.logger.log(`Sending email to ${to}`);
    try {
      const mailOptions: nodemailer.SendMailOptions = {
        from: 'Event Ticketing App <noreply@event-ticketing-app.com>',
        to,
        subject,
        html,
      };
      await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email sent to ${to}`);
    } catch {
      this.logger.error(`Failed to send email to ${to}`);
    }
  }
}

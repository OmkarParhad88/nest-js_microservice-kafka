import { NestFactory } from '@nestjs/core';
import { NotificationServiceModule } from './notification-service.module';
import { SERVICES_PORT } from '@app/shared';
import { Transport } from '@nestjs/microservices';
import { KAFKA_CLIENT_ID, KAFKA_BROKER } from '@app/kafka';

async function bootstrap() {
  const app = await NestFactory.create(NotificationServiceModule);

  //connect to kafka
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: `${KAFKA_CLIENT_ID}-notification`,
        brokers: [KAFKA_BROKER],
      },
      consumer: {
        groupId: `notification-consumer-group`,
      },
    },
  });

  //start kafka microservices
  await app.startAllMicroservices();

  await app.listen(SERVICES_PORT.NOTIFICATION_SERVICE);
  console.log(
    `Notification service is running on http://localhost:${SERVICES_PORT.NOTIFICATION_SERVICE}`,
  );
}
bootstrap();

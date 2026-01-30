import { KAFKA_SERVICE, KAFKA_TOPIC } from '@app/kafka';
import { SERVICES_PORT } from '@app/shared';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AuthServiceService implements OnModuleInit {
  constructor(
    @Inject(KAFKA_SERVICE) private readonly kafkaService: ClientKafka,
  ) { }

  async onModuleInit() {
    console.log('AuthService initialized');
    // this.kafkaService.subscribeToResponseOf('auth-service-consumer-group');
    await this.kafkaService.connect();
  }

  getHello(): string {
    return `Hello World! from auth-service on port ${SERVICES_PORT.AUTH_SERVICE}`;
  }

  userRegister(name: string) {
    this.kafkaService.emit(KAFKA_TOPIC.USER_REGISTERED, {
      name,
      timeStamp: new Date().toISOString(),
    });
    return 'User registered successfully';
  }
}

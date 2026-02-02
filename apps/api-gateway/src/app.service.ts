import { SERVICES_PORT } from '@app/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! from api-gateway on port ${SERVICES_PORT.API_GATEWAY}`;
  }
}

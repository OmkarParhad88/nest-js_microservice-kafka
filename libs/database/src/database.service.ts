import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService extends PrismaClient {
  constructor(configService: ConfigService) {
    const connectionString = configService.get<string>('DATABASE_URL');

    if (typeof connectionString !== 'string') {
      throw new Error('DATABASE_URL must be defined');
    }

    const pool = new Pool({
      connectionString,
    });
    const adapter = new PrismaPg(pool);
    super({
      adapter,
      log: ['query', 'info', 'warn', 'error'],
    });
  }
}

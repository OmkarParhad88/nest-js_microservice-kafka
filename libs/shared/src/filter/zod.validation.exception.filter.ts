import { Logger, Catch, ConflictException, ArgumentsHost } from '@nestjs/common';
import { ZodError } from 'zod';
import { ZodValidationException } from 'nestjs-zod';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@app/database';
import { NotFoundException } from '@nestjs/common';

@Catch(ZodValidationException, Prisma.PrismaClientKnownRequestError)
export class HttpExceptionFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(
    exception: ZodValidationException | Prisma.PrismaClientKnownRequestError,
    host: ArgumentsHost,
  ) {
    if (exception instanceof ZodValidationException) {
      const error = exception.getZodError() as ZodError;
      throw new ConflictException(error.issues);
    }

    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      if (exception.code === 'P2025') {
        throw new NotFoundException([exception.meta]);
      }
    }
    super.catch(exception, host);
  }
}

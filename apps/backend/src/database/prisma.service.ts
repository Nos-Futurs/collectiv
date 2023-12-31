import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@collectiv/db-entities/prisma';

@Injectable()
export default class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }
}

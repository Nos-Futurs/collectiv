import { Injectable } from '@nestjs/common';
import { PendingUser } from '@prisma/client';
import PrismaService from '../database/prisma.service';

@Injectable()
export class PendingUserService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<PendingUser | undefined> {
    return this.prisma.pendingUser.findUnique({
      where: { email },
    });
  }
}

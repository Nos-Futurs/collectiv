import {  UserDto } from '@collectiv/db-entities/backend';
import { Injectable } from '@nestjs/common';
import PrismaService from '../database/prisma.service.js';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string): Promise<UserDto | undefined> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}

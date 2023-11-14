import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PendingUser } from '@prisma/client';
import PrismaService from '../database/prisma.service';
import JwtAuthGuard from 'src/auth/guard/jwt-auth.guard';


@Controller('pending-users')
export class PendingUserController {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<PendingUser[]> {
    return this.prisma.pendingUser.findMany();
  }
  
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string): Promise<PendingUser> {
    return this.prisma.pendingUser.findUnique({
      where: { id: Number(id) }
    });
  }

  @Post()
  async create(@Body() data: Omit<PendingUser, 'id'>): Promise<PendingUser> {
    return this.prisma.pendingUser.create({
      data,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<PendingUser> {
    return this.prisma.pendingUser.delete({
      where: { id: Number(id) },
    });
  }
}

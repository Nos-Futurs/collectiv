import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { User } from '@prisma/client';
import PrismaService from '../database/prisma.service';

@Controller('user')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
  }

  @Post()
  async create(@Body() userData: Omit<User, 'id'>): Promise<User> {
    return this.prisma.user.create({
      data: userData,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() userData: Partial<User>,
  ): Promise<User> {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}

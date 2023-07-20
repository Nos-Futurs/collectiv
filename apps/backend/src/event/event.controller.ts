import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Event } from '@prisma/client';
import PrismaService from '../database/prisma.service';
import JwtAuthGuard from 'src/auth/guard/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('event')
export class EventController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany({include: { tags: true }});
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Event> {
    return this.prisma.event.findUnique({
      where: { id: Number(id) },
      include: { tags: true }
    });
  }

  @Post()
  async create(@Body() eventData: Omit<Event, 'id'>): Promise<Event> {
    return this.prisma.event.create({
      data: eventData,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() eventData: Partial<Event>,
  ): Promise<Event> {
    return this.prisma.event.update({
      where: { id: Number(id) },
      data: eventData,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Event> {
    return this.prisma.event.delete({
      where: { id: Number(id) },
    });
  }
}

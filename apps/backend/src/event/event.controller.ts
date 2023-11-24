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
import PrismaService from '../database/prisma.service.js';
import JwtAuthGuard from '../auth/guard/jwt-auth.guard.js';
import { CreateEventDto, Event } from '@collectiv/db-entities/backend';

@UseGuards(JwtAuthGuard)
@Controller('event')
export class EventController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany({ include: { tags: true } });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Event> {
    return this.prisma.event.findUnique({
      where: { id: Number(id) },
      include: { tags: true },
    });
  }

  @Post()
  async create(@Body() dto: CreateEventDto): Promise<Event> {
    const connectGroup = dto.workingGroup
      ? {
          connect: {
            id: dto.workingGroup.connect.id,
          },
        }
      : undefined;
    const connectTags = dto.tags
      ? {
          connect: dto.tags?.connect.map((connection) => ({
            id: connection.id,
          })),
        }
      : undefined;

    return this.prisma.event.create({
      data: { ...dto, workingGroup: connectGroup, tags: connectTags },
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<CreateEventDto>,
  ): Promise<Event> {
    const connectGroup = dto.workingGroup
      ? {
          connect: {
            id: dto.workingGroup.connect.id,
          },
        }
      : undefined;
    const connectTags = dto.tags
      ? {
          connect: dto.tags?.connect.map((connection) => ({
            id: connection.id,
          })),
        }
      : undefined;
    return this.prisma.event.update({
      where: { id: Number(id) },
      data: { ...dto, workingGroup: connectGroup, tags: connectTags },
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Event> {
    return this.prisma.event.delete({
      where: { id: Number(id) },
    });
  }
}

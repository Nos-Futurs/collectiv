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
import { Tag } from '@prisma/client';
import PrismaService from '../database/prisma.service';
import JwtAuthGuard from 'src/auth/guard/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('tag')
export class TagController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<Tag[]> {
    return this.prisma.tag.findMany();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Tag> {
    return this.prisma.tag.findUnique({
      where: { id: Number(id) },
    });
  }

  @Post()
  async create(@Body() tagData: Omit<Tag, 'id'>): Promise<Tag> {
    return this.prisma.tag.create({
      data: tagData,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() tagData: Partial<Tag>,
  ): Promise<Tag> {
    return this.prisma.tag.update({
      where: { id: Number(id) },
      data: tagData,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Tag> {
    return this.prisma.tag.delete({
      where: { id: Number(id) },
    });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WorkingGroup } from '@prisma/client';
import PrismaService from '../database/prisma.service';

@Controller('working-group')
export class WorkingGroupController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<WorkingGroup[]> {
    return this.prisma.workingGroup.findMany();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<WorkingGroup> {
    return this.prisma.workingGroup.findUnique({
      where: { id: Number(id) },
    });
  }

  @Post()
  async create(@Body() workingGroupData: Omit<WorkingGroup, 'id'>): Promise<WorkingGroup> {
    return this.prisma.workingGroup.create({
      data: workingGroupData,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() workingGroupData: Partial<WorkingGroup>,
  ): Promise<WorkingGroup> {
    return this.prisma.workingGroup.update({
      where: { id: Number(id) },
      data: workingGroupData,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<WorkingGroup> {
    return this.prisma.workingGroup.delete({
      where: { id: Number(id) },
    });
  }
}

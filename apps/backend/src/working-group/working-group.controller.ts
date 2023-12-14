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
import {
  CreateWorkingGroupDto,
  UpdateWorkingGroupDto,
  WorkingGroup,
} from '@collectiv/db-entities/backend';

@UseGuards(JwtAuthGuard)
@Controller('working-group')
export class WorkingGroupController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<WorkingGroup[]> {
    return this.prisma.workingGroup.findMany({
      include: { tags: true, users: true },
    });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<WorkingGroup> {
    return this.prisma.workingGroup.findUnique({
      where: { id: Number(id) },
      include: { tags: true, users: true, Event: true, owner: true },
    });
  }

  @Post()
  async create(@Body() dto: CreateWorkingGroupDto): Promise<WorkingGroup> {
    const connectOwner = dto.owner
      ? {
          connect: {
            id: dto.owner.connect.id,
          },
        }
      : undefined;
    const connectUsers = {
      connect: dto.users?.connect.map((connectDto) => ({
        id: connectDto.id,
      })),
    };
    return this.prisma.workingGroup.create({
      data: { ...dto, owner: connectOwner, users: connectUsers },
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateWorkingGroupDto,
  ): Promise<WorkingGroup> {
    const connectOwner = dto.owner
      ? {
          connect: {
            id: dto.owner.connect.id,
          },
        }
      : undefined;
    const connectUsers = dto.users
      ? dto.users.connect
        ? {
            connect: dto.users.connect.map((connectDto) => ({
              id: connectDto.id,
            })),
          }
        : dto.users.disconnect
        ? {
            disconnect: dto.users.disconnect.map((disconnectDto) => ({
              id: disconnectDto.id,
            })),
          }
        : undefined
      : undefined;
    return this.prisma.workingGroup.update({
      where: { id: Number(id) },
      data: { ...dto, owner: connectOwner, users: connectUsers },
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<WorkingGroup> {
    return this.prisma.workingGroup.delete({
      where: { id: Number(id) },
    });
  }
}

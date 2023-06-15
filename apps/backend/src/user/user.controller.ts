import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Tag, TagsOnUsers, User } from '@prisma/client';
import PrismaService from '../database/prisma.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

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

  @Put(':id/add-tag')
  async addTag(@Param('id') id: string, @Body() tagData: Partial<Tag>) {
    return this.userService.addTag(Number(id), tagData.id);
  }

  @Put(':id/remove-tag')
  async removeTag(
    @Param('id') id: string,
    @Body() data: {tagId: number},
  ): Promise<TagsOnUsers> {
    return this.userService.removeTag(Number(id), data.tagId);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import JwtAuthGuard from '~/auth/guard/jwt-auth.guard.js';
import PrismaService from '~/database/prisma.service.js';
import { UserService } from './user.service.js';
import RequestWithUser from '~/auth/types/RequestWithUser.js';
import {
  CreateUserDto,
  TagDto,
  TagsOnUsers,
  User,
} from '@collectiv/db-entities/backend';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  @Get('/me')
  async findMe(@Req() req: RequestWithUser): Promise<User> {
    return req.user;
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { tags: true } });
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: Number(id) },
      include: { tags: true },
    });
  }

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    const connectCompany = dto.company
      ? {
          connect: {
            id: dto.company.connect.id,
          },
        }
      : undefined;

    return this.prisma.user.create({
      data: { ...dto, company: connectCompany },
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<CreateUserDto>,
  ): Promise<CreateUserDto> {
    const connectCompany = dto.company
      ? {
          connect: {
            id: dto.company.connect.id,
          },
        }
      : undefined;
    return this.prisma.user.update({
      where: { id: Number(id) },
      data: { ...dto, company: connectCompany },
    });
  }

  @Put(':id/add-tag')
  async addTag(@Param('id') id: string, @Body() tagData: Partial<TagDto>) {
    return this.userService.addTag(Number(id), tagData.id);
  }

  @Put(':id/remove-tag')
  async removeTag(
    @Param('id') id: string,
    @Body() data: { tagId: number },
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

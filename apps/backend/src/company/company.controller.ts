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
import { CompanyDto } from '@collectiv/db-entities/backend';


@UseGuards(JwtAuthGuard)
@Controller('company')
export class CompanyController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<CompanyDto[]> {
    return this.prisma.company.findMany({include: { tags: true }});
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<CompanyDto> {
    return this.prisma.company.findUnique({
      where: { id: Number(id) },
      include: { tags: true }
    });
  }

  @Post()
  async create(@Body() companyData: Omit<CompanyDto, 'id'>): Promise<CompanyDto> {
    return this.prisma.company.create({
      data: companyData,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() companyData: Partial<CompanyDto>,
  ): Promise<CompanyDto> {
    return this.prisma.company.update({
      where: { id: Number(id) },
      data: companyData,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<CompanyDto> {
    return this.prisma.company.delete({
      where: { id: Number(id) },
    });
  }
}

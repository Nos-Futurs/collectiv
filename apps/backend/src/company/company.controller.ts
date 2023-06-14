import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Company } from '@prisma/client';
import PrismaService from '../database/prisma.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async findAll(): Promise<Company[]> {
    return this.prisma.company.findMany();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Company> {
    return this.prisma.company.findUnique({
      where: { id: Number(id) },
    });
  }

  @Post()
  async create(@Body() companyData: Omit<Company, 'id'>): Promise<Company> {
    return this.prisma.company.create({
      data: companyData,
    });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() companyData: Partial<Company>,
  ): Promise<Company> {
    return this.prisma.company.update({
      where: { id: Number(id) },
      data: companyData,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Company> {
    return this.prisma.company.delete({
      where: { id: Number(id) },
    });
  }
}

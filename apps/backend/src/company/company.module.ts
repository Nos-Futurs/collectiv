import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module.js';
import { CompanyController } from './company.controller.js';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: []
})
export class CompanyModule {}

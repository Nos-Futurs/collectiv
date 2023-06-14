import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { CompanyController } from './company.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: []
})
export class CompanyModule {}

import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { TagController } from './tag.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TagController],
  providers: []
})
export class TagModule {}

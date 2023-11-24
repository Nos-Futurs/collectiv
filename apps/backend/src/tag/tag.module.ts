import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module.js';
import { TagController } from './tag.controller.js';

@Module({
  imports: [DatabaseModule],
  controllers: [TagController],
  providers: []
})
export class TagModule {}

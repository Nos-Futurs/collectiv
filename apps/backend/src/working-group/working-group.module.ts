import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module.js';
import { WorkingGroupController } from './working-group.controller.js';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkingGroupController],
  providers: []
})
export class WorkingGroupModule {}

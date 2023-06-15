import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { WorkingGroupController } from './working-group.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [WorkingGroupController],
  providers: []
})
export class WorkingGroupModule {}

import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { EventController } from './event.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [EventController],
  providers: []
})
export class EventModule {}

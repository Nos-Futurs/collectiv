import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module.js';
import { EventController } from './event.controller.js';

@Module({
  imports: [DatabaseModule],
  controllers: [EventController],
  providers: []
})
export class EventModule {}

import { Module } from '@nestjs/common';
import DatabaseModule from '../database/database.module';
import { PendingUserController } from './pending-user.controller';
import { PendingUserService } from './pending-user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PendingUserController],
  providers: [PendingUserService],
  exports: [PendingUserService],
})
export class PendingUserModule {}

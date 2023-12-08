import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module.js';
import { CompanyModule } from './company/company.module.js';
import { EventModule } from './event/event.module.js';
import { TagModule } from './tag/tag.module.js';
import { UserModule } from './user/user.module.js';
import { WorkingGroupModule } from './working-group/working-group.module.js';
import DatabaseModule from './database/database.module.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    CompanyModule,
    EventModule,
    TagModule,
    UserModule,
    WorkingGroupModule,
    DatabaseModule,
  ],
  controllers: [],
})
export class AppModule {}

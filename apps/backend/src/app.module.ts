import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { EventModule } from './event/event.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { WorkingGroupModule } from './working-group/working-group.module';
import { PendingUserModule } from './pending-user/pending-user.module';

@Module({
  imports: [
    AuthModule,
    CompanyModule,
    EventModule,
    PendingUserModule,
    TagModule,
    UserModule,
    WorkingGroupModule,
  ],
  controllers: [],
})
export class AppModule {}

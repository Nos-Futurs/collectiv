import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { EventModule } from './event/event.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { WorkingGroupModule } from './working-group/working-group.module';

@Module({
  imports: [
    UserModule,
    CompanyModule,
    WorkingGroupModule,
    TagModule,
    EventModule,
    AuthModule,
  ],
  controllers: [],
})
export class AppModule {}

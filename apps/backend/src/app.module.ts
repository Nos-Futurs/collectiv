import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { EventModule } from './event/event.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { WorkingGroupModule } from './working-group/working-group.module';

@Module({
  imports: [UserModule, CompanyModule, WorkingGroupModule, TagModule, EventModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

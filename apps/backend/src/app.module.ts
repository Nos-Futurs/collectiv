import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guard/auth.guard';
import { CompanyModule } from './company/company.module';
import { EventModule } from './event/event.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { WorkingGroupModule } from './working-group/working-group.module';

@Module({
  imports: [UserModule, CompanyModule, WorkingGroupModule, TagModule, EventModule, AuthModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },],
})
export class AppModule {}

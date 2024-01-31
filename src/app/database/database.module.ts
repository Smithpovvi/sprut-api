import { Module } from '@nestjs/common';
import { UsersRepo } from './repositories/users.repo';
import { ConnectionModule } from '@database/connection.module';

@Module({
  imports: [ConnectionModule],
  providers: [UsersRepo],
  exports: [ConnectionModule, UsersRepo],
})
export class DatabaseModule {}

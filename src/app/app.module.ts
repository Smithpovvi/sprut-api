import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@database/database.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ListsModule } from '@modules/lists/lists.module';
import { UnitsModule } from '@modules/units/units.module';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    ListsModule,
    UnitsModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

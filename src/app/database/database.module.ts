import { Module, Provider } from '@nestjs/common';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

export const PG_CONNECTION = 'PG_CONNECTION';

const dbProvider: Provider = {
  provide: 'PG_CONNECTION',
  useFactory: (configService: ConfigService) =>
    new Pool({
      user: configService.get<string>('DB_USER'),
      host: configService.get<string>('DB_HOST'),
      database: configService.get<string>('DB_DATABASE'),
      password: configService.get<string>('DB_PASSWORD'),
      port: +configService.get<string>('DB_PORT'),
    }),
  inject: [ConfigService],
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}

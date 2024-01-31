import { Inject, Injectable } from '@nestjs/common';
import {
  IUser,
  TCreateUser,
  TFindUser,
} from '@core/models/user.model.interface';
import { IUserRepo } from '@core/repositories/user.repo.interface';
import { PG_CONNECTION } from '@database/database.module';

@Injectable()
export class UsersRepo implements IUserRepo {
  constructor(@Inject(PG_CONNECTION) private connection: any) {}

  async getMany(where?: TFindUser): Promise<IUser[]> {
    const resp = await this.connection.query(`SELECT * FROM users`);
    return resp.rows;
  }

  async getOne(userId: number): Promise<IUser> {
    return this.connection.query(`
          SELECT * 
          FROM users 
          WHERE userId = ${userId}
        `);
  }

  async create(data: TCreateUser): Promise<IUser> {
    return this.connection.query(``);
  }

  async update(data: Partial<TCreateUser>): Promise<IUser> {
    return this.connection.query(``);
  }

  async delete(userId: number): Promise<void> {
    return this.connection.query(``);
  }
}

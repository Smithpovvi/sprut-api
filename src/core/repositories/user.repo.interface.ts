import {
  IUser,
  TCreateUser,
  TFindUser,
} from '@core/models/user.model.interface';

export interface IUserRepo {
  getOne(userId: number): Promise<IUser>;
  getMany(where?: TFindUser): Promise<IUser[]>;
  create(data: TCreateUser): Promise<IUser>;
  update(data: Partial<TCreateUser>): Promise<IUser>;
  delete(userId: number): Promise<void>;
}

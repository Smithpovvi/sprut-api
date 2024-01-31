export interface IUser {
  userId: number;
  email: string;
  password: string;
  role: string;
}

export type TCreateUser = Pick<IUser, 'email' | 'password'>;

export type TFindUser = Partial<Pick<IUser, 'email' | 'userId'>>;

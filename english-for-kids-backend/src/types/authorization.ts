export interface UserType {
  login: string;
  name: string;
  password: string;
  role?: 'admin' | 'user';
}

export interface RequestAuthUserType {
  login: string;
  password: string;
}

export interface AuthTokensType {
  [K: string]: UserType;
}

export interface ResultType {
  result: 'success';
}

export enum AuthorizationConst {
  AUTH_TOKEN= 'AuthToken',
}

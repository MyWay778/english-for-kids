export interface UserType {
  login: string;
  password: string;
  role?: 'admin';
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

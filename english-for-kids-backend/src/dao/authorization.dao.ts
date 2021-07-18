import {RequestAuthUserType, ResultType, UserType} from '../types/authorization';
import {authTokens, users} from '../data/authorization';

export default class AuthorizationDAO {
  static async findUser(user: RequestAuthUserType): Promise<UserType> {
      const foundUser = users.find(dataUser => dataUser.login === user.login && dataUser.password === user.password);

      if (!foundUser) {
        return Promise.reject(new Error(`User ${user.login} is not found`));
      }

      return Promise.resolve(foundUser);
  }

  static async saveAuthTokenWithUser(authToken: string, user: UserType): Promise<ResultType> {
    if (!authTokens[authToken]) {
      authTokens[authToken] = user;
      return Promise.resolve({result: 'success'});
    } else {
     return Promise.reject(new Error('Token is already exist'));
    }
  }

  static async getUserByAuthToken(authToken: string): Promise<UserType | null> {
    const user = authTokens[authToken];
    return Promise.resolve(user || null);
  }

  static async logout(authToken: string): Promise<void> {
    const user = authTokens[authToken];
    if (user) {
      delete authTokens[authToken];
      return Promise.resolve();
    }
    return Promise.resolve();
  }
}
import {RequestAuthUserType, ResultType, UserType} from '../types/authorization';
import {authTokens, users} from '../data/authorization';
import {Collection, MongoClient} from 'mongodb';

let userCollection: Collection<UserType>;

export default class AuthorizationDAO {
  static async injectDB(conn: MongoClient): Promise<void> {
    if (userCollection) {
      return;
    }
    try {
      userCollection = await conn.db('english-for-kids').collection('users');
    } catch (e) {
      console.log(`Unable to establish a collection handle in AuthorizationDAO: ${e}`)
    }
  }

  static async findUser(user: RequestAuthUserType): Promise<UserType> {
    const foundUser = users.find(dataUser => dataUser.login === user.login && dataUser.password === user.password);

    if (!foundUser) {
      return Promise.reject(new Error(`User ${user.login} is not found`));
    }

    return Promise.resolve(foundUser);
  }

  static async findUserFromDB(user: RequestAuthUserType): Promise<UserType> {
    if (userCollection) {
      const foundUser = await userCollection.findOne({login: user.login, password: user.password});
      if (foundUser) {
        return Promise.resolve(foundUser);
      }
      return Promise.reject('User is not found');
    }
    return Promise.reject('BD is unavailable');
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
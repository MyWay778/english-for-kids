import express from 'express';
import getHashedPassword from '../../helpers/getHashedPassword';
import AuthorizationDAO from '../../dao/authorization.dao';
import generateAuthToken from '../../helpers/generateAuthToken';
import {
  AuthorizationConst,
  RequestAuthUserType,
} from '../../types/authorization';

export default class AuthorizationController {
  static async authorize(
    req: express.Request<{}, {}, RequestAuthUserType>,
    res: express.Response
  ) {
    const { login, password } = req.body;
    
    if (!login) {
      const authToken = req.cookies[AuthorizationConst.AUTH_TOKEN];
      if (authToken) {
        try {
          await AuthorizationDAO.logout(authToken);
          res.cookie(AuthorizationConst.AUTH_TOKEN, authToken, {
            maxAge: 0,
            httpOnly: true,
            sameSite: 'none',
            secure: true,
          });
          res.sendStatus(200);
          return;
        } catch (e) {
          res.sendStatus(500);
          return;
        }
      }
    }

    const hashedPassword = getHashedPassword(password);
    try {
      const user = await AuthorizationDAO.findUserFromDB({
        login,
        password: hashedPassword,
      });
      const authToken = generateAuthToken();

      await AuthorizationDAO.saveAuthTokenWithUser(authToken, user);

      res.cookie(AuthorizationConst.AUTH_TOKEN, authToken, {
        maxAge: 900000,
        httpOnly: true,
        sameSite: 'none',
        secure: true,
      });
      res.json({ result: 'success', name: user.name, role: user.role });
    } catch (e) {
      res.status(401).json({ error: e.message });
    }
  }

  static async identify(req: express.Request, res: express.Response) {
    const user = req.user;
    if (user) {
      res.json({ result: 'success', name: user.name, role: user.role });
      return;
    }
    res.sendStatus(401);
  }
}

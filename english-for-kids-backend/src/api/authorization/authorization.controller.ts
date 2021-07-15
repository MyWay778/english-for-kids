import express from "express";
import getHashedPassword from '../../helpers/getHashedPassword';
import AuthorizationDAO from '../../dao/authorization.dao';
import generateAuthToken from '../../helpers/generateAuthToken';
import {AuthorizationConst, RequestAuthUserType} from '../../types/authorization';


export default class AuthorizationController {
  static async authorize(req: express.Request<{}, {}, RequestAuthUserType>, res: express.Response) {
    const {login, password} = req.body;
    const hashedPassword = getHashedPassword(password);

    try {
      const user = await AuthorizationDAO.findUser({login, password: hashedPassword});
      const authToken = generateAuthToken();

      await AuthorizationDAO.saveAuthTokenWithUser(authToken, user);

      res.cookie(AuthorizationConst.AUTH_TOKEN, authToken,  { maxAge: 900000, httpOnly: true });
      res.json({result: 'success', name: user.name, role: user.role});
    } catch (e) {
      res.status(401).json({error: e.message});
    }
  }
}
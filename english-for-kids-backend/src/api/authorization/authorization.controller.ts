import express from "express";
import getHashedPassword from '../../helpers/getHashedPassword';
import AuthorizationDAO from '../../dao/authorization.dao';
import generateAuthToken from '../../helpers/generateAuthToken';
import {AuthorizationConst} from '../../types/authorization';


export default class AuthorizationController {
  static async authorize(req: express.Request, res: express.Response) {
    const {login, password} = req.body;
    const hashedPassword = getHashedPassword(password);

    try {
      const user = await AuthorizationDAO.findUser({login, password: hashedPassword});
      const authToken = generateAuthToken();

      await AuthorizationDAO.saveAuthTokenWithUser(authToken, user);

      res.cookie(AuthorizationConst.AUTH_TOKEN, authToken);
      res.json({result: 'success', role: user.role});
    }catch (e) {
      res.status(401).json({error: e.message});
    }
  }
}
import express from "express";
import {AuthorizationConst} from '../types/authorization';
import AuthorizationDAO from '../dao/authorization.dao';

const authenticateByToken = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
  const authToken = req.cookies[AuthorizationConst.AUTH_TOKEN];
  req.user = await AuthorizationDAO.getUserByAuthToken(authToken);
  next();
};

export default authenticateByToken;
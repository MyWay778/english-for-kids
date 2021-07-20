import express, {Router} from 'express';
import authenticateByToken from '../../middleware/authenticateByToken';
import AuthorizationController from './authorization.controller';

const authorizationRouter = Router();

authorizationRouter.route('/')
  .post(AuthorizationController.authorize)
  .get(authenticateByToken, AuthorizationController.identify);

export default authorizationRouter;

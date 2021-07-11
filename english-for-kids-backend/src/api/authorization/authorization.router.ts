import express, {Router} from 'express';
import AuthorizationController from './authorization.controller';

const authorizationRouter = Router();

authorizationRouter.route('/').post(AuthorizationController.authorize);

export default authorizationRouter;
import {Router} from 'express';
import AdminController from './admin.controller';
import authenticateByToken from '../../middleware/authenticateByToken';

const adminRouter = Router();

adminRouter.route('/categories').get(authenticateByToken, AdminController.getCategories);

export default adminRouter;
import {Router} from 'express';
import AdminController from './admin.controller';
import authenticateByToken from '../../middleware/authenticateByToken';

const adminRouter = Router();

adminRouter.route('/categories')
  .get(authenticateByToken, AdminController.getCategories)
  .patch(authenticateByToken, AdminController.editCategory)
  .post(authenticateByToken, AdminController.addCategory);

adminRouter.route('/words')
  .patch(authenticateByToken, AdminController.editWord)
  .post(authenticateByToken, AdminController.addWord);

export default adminRouter;
import {Router} from 'express';
import CategoriesController from './categories.controller';

const categoriesRouter = Router();

categoriesRouter.route('/').get(CategoriesController.apiGetCategories);

export default categoriesRouter;
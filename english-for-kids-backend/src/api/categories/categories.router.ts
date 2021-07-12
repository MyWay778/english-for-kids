import {Router} from 'express';
import CategoriesController from './categories.controller';

const categoriesRouter = Router();

categoriesRouter.route('/').get(CategoriesController.apiGetCategories);
categoriesRouter.route('/id/:id').get(CategoriesController.apiGetWordsFromCategoryById);
categoriesRouter.route('/wordsId/:ids').get(CategoriesController.apiGetWordsByIds);

export default categoriesRouter;
import express from "express";
import CategoriesDAO from '../../dao/categories.dao';

export default class CategoriesController {
  static async apiGetCategories(req: express.Request, res: express.Response) {
    const categories = await CategoriesDAO.getCategories();
    res.json(categories);
  }

  static async apiGetWordsFromCategoryById(req: express.Request, res: express.Response) {
    const id = Number(req.params.id);
    try {
      const category = await CategoriesDAO.getCategoryById(id);
      res.json(category.words);
    } catch(e) {
      res.status(404).json({error: e.message});
    }
  }
}
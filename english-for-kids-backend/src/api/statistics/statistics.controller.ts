import express from 'express';
import CategoriesDAO from '../../dao/categories.dao';

export default class StatisticsController {
  static async apiGetWords(req: express.Request, res: express.Response) {
    const words = await CategoriesDAO.getWordList();
    res.json(words);
  }
}
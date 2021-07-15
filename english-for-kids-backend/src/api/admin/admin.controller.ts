import express from "express";
import {decode} from 'node-base64-image';
import CategoriesDAO from '../../dao/categories.dao';
import {NewCategoryDataType, NewWordDataType} from '../../types/admin';
import {CategoryType, WordType} from '../../types/categories';
import {baseURL} from '../../index';
import writeImageLocal from '../../helpers/writeImageLocal';


export default class AdminController {
  static async getCategories(req: express.Request, res: express.Response) {
    const user = req.user;
    if (user.role === 'admin') {
      const categories = await CategoriesDAO.getCategoriesForAdmin();
      res.json(categories);
    } else {
      res.sendStatus(401);
    }
  }

  static async editCategory(req: express.Request, res: express.Response) {
    const user = req.user;
    const newCategoryData: NewCategoryDataType = req.body;
    if (!newCategoryData.name || !newCategoryData.id) {
      res.sendStatus(400);
      return;
    }
    if (user.role !== 'admin') {
      res.sendStatus(401);
    }

    if (newCategoryData.imageFile) {
      try {
        const imageUrl = await writeImageLocal(newCategoryData.imageFile, `category-${newCategoryData.name}`);
        newCategoryData.imageFile = imageUrl;
      } catch (e) {
        console.log(e);
      }
    }

    const updatedCategory = await CategoriesDAO.editCategory(newCategoryData);
    res.json(updatedCategory);

  }

  static async editWord(req: express.Request, res: express.Response) {
    const user = req.user;
    const newWordData: NewWordDataType = req.body;
    if (!newWordData.spelling || !newWordData.spelling || !newWordData.wordId) {
      res.sendStatus(400);
      return;
    }
    if (user.role === 'admin') {
      const updatedWord = await CategoriesDAO.editWord(newWordData);
      res.json(updatedWord);
    } else {
      res.sendStatus(401);
    }
  }

  static async addCategory(req: express.Request, res: express.Response) {
    const user = req.user;
    if (user.role !== 'admin') {
      res.sendStatus(401);
      return;
    }
    const data: NewCategoryDataType  = req.body;
    if (!data.name) {
      res.sendStatus(400);
    }

    const category: CategoryType = {
      ...data,
      imageSrc: '',
      words: [],
    }

    if (data.imageFile) {
      try {
        const imageUrl = await writeImageLocal(data.imageFile, `category-${data.name}`);
        category.imageSrc = imageUrl;
      } catch (e) {
        console.log(e);
      }
    }

    const newCategory = await CategoriesDAO.addCategory(category);
    res.json({...newCategory, wordCount: category.words.length});
  }

  static async addWord(req: express.Request, res: express.Response) {
    const user = req.user;
    if (user.role !== 'admin') {
      res.sendStatus(401);
      return;
    }
    const data: NewWordDataType = req.body;
    try {
      const newWord = await CategoriesDAO.addWord(data);
      res.json(newWord);
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  }
}
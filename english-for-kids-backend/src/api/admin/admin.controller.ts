import express from "express";

export default class AdminController {
  static async getCategories(req: express.Request, res: express.Response) {
    const user = req.user;
    console.log(user);
  }
}
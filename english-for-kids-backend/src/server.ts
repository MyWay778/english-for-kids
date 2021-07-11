import express from 'express';
import categoriesRouter from './api/categories/categories.router';

const app = express();

app.use(express.json());

app.use('/api/categories/', categoriesRouter);

export default app;
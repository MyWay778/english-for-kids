import express from 'express';
import cors from 'cors';
import categoriesRouter from './api/categories/categories.router';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories/', categoriesRouter);

export default app;
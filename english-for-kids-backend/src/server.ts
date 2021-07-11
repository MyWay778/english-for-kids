import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import categoriesRouter from './api/categories/categories.router';
import authorizationRouter from './api/authorization/authorization.router';
import adminRouter from './api/admin/admin.router';

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/categories/', categoriesRouter);
app.use('/api/login/', authorizationRouter);
app.use('/api/admin/', adminRouter);

export default app;
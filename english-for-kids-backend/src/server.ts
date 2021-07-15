import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import categoriesRouter from './api/categories/categories.router';
import authorizationRouter from './api/authorization/authorization.router';
import adminRouter from './api/admin/admin.router';
import statRouter from './api/statistics/statistics.router';

const app = express();

const origin = "http://localhost:3000";

app.use(cors({credentials: true, origin}));
app.use(cookieParser());
app.use(express.json());

app.use('/resources', express.static('./uploads'));
app.use('/api/categories/', categoriesRouter);
app.use('/api/login/', authorizationRouter);
app.use('/api/admin/', adminRouter);
app.use('/api/statistics/', statRouter);

export default app;
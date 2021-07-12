import {Router} from 'express';
import StatisticsController from './statistics.controller';

const statRouter = Router();

statRouter.route('/words').get(StatisticsController.apiGetWords);

export default statRouter;
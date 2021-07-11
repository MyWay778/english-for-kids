import appActionCreators from './app';
import gameActionCreators from './game';
import authActionCreators from './auth';

type ActionCreators = typeof appActionCreators & typeof gameActionCreators & typeof authActionCreators;

export type ActionsCreatorType = {
  [K in keyof ActionCreators]: ActionCreators[K];
};

const ActionsCreator: ActionsCreatorType = {
  ...appActionCreators,
  ...gameActionCreators,
  ...authActionCreators,
};

export default ActionsCreator;

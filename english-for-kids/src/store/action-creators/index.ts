import appActionCreators from './app';
import gameActionCreators from './game';

type ActionCreators = typeof appActionCreators & typeof gameActionCreators;

export type ActionsCreatorType = {
  [K in keyof ActionCreators]: ActionCreators[K];
};

const ActionsCreator: ActionsCreatorType = {
  ...appActionCreators,
  ...gameActionCreators,
};

export default ActionsCreator;

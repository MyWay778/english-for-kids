import appActionCreators from './app';
import gameActionCreators from './game';
import authActionCreators from './auth';
import wordsStatActionCreators from './wordsStat';

type ActionCreators =
  typeof appActionCreators
  & typeof gameActionCreators
  & typeof authActionCreators
  & typeof wordsStatActionCreators;

export type ActionsCreatorType = {
  [K in keyof ActionCreators]: ActionCreators[K];
};

const ActionsCreator: ActionsCreatorType = {
  ...appActionCreators,
  ...gameActionCreators,
  ...authActionCreators,
  ...wordsStatActionCreators,
};

export default ActionsCreator;

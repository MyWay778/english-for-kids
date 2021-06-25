import { CategoryActionsCreator } from './category';
import appActionCreators from './app';

type ActionCreators = typeof CategoryActionsCreator & typeof appActionCreators;

export type ActionsCreatorType = {
  [K in keyof ActionCreators]: ActionCreators[K];
};

const ActionsCreator: ActionsCreatorType = {
  ...CategoryActionsCreator,
  ...appActionCreators,
};

export default ActionsCreator;

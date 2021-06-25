import { CategoryActionsCreator } from './category';
import appActionCreators from './app';
import cardsActionCreators from './cards';

type ActionCreators = typeof CategoryActionsCreator &
  typeof appActionCreators &
  typeof cardsActionCreators;

export type ActionsCreatorType = {
  [K in keyof ActionCreators]: ActionCreators[K];
};

const ActionsCreator: ActionsCreatorType = {
  ...CategoryActionsCreator,
  ...appActionCreators,
  ...cardsActionCreators,
};

export default ActionsCreator;

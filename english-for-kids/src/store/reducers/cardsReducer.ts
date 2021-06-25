import { CardActions, CardsActionTypes, CardsState } from '../../types/cards';

const initialState: CardsState = {
  cards: [],
};

const cardsReducer = (
  state = initialState,
  action: CardActions
): CardsState => {
  switch (action.type) {
    case CardsActionTypes.FETCH_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};

export default cardsReducer;

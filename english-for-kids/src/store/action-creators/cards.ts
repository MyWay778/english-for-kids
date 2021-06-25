import { Dispatch } from 'redux';
import { fetchCardsFromApi } from '../../mock-api/mock-api';
import { CardActions, CardsActionTypes } from '../../types/cards';

// eslint-disable-next-line import/prefer-default-export
const fetchCards =
  (categoryId: number) =>
  (dispatch: Dispatch<CardActions>): void => {
    const cards = fetchCardsFromApi(categoryId);
    if (cards) {
      dispatch({type: CardsActionTypes.FETCH_CARDS, payload: cards});
    }
  };

const cardsActionCreators = {
  fetchCards
}

export default cardsActionCreators;
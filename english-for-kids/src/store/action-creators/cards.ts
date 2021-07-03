import { Dispatch } from 'redux';
import { fetchCardsFromApi } from '../../mock-api/mock-api';
import { CardActions, CardsActionTypes } from '../../types/cards';

const fetchCards =
  (categoryId: number) =>
  async (dispatch: Dispatch<CardActions>): Promise<void> => {
    const cards = await fetchCardsFromApi(categoryId);
    if (cards) {
      dispatch({type: CardsActionTypes.FETCH_CARDS, payload: cards});
    }
  };

const cardsActionCreators = {
  fetchCards
}

export default cardsActionCreators;
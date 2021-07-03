export interface CardsState {
  cards: CardType[];
}

export interface CardType {
  id: number;
  spelling: string;
  translating: string;
  imageSrc: string;
  soundSrc: string;
}

export enum CardsActionTypes {
  FETCH_CARDS = 'FETCH_CARDS'
}

interface FetchCardsAction {
  type: CardsActionTypes.FETCH_CARDS;
  payload: CardType[];
}

export type CardActions = FetchCardsAction;
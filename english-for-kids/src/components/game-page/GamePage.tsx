import { FC, ReactElement, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import GameCard, { GameClickHandlerType } from '../game-card/game-card';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import { CardType } from '../../types/cards';
import Star from '../icons/Star';
import './game-page.scss';
import GameControl from '../game-control/GameControl';


const shuffleCards = (cards: CardType[]): CardType[] =>
  cards.concat().sort(() => Math.random() - 0.5);

const playSound = (card: CardType): void => {
  const audio = new Audio(card.soundSrc);
  audio.volume = 0.2;
  audio.play();
};

interface UserAnswerType {
  id: number;
  type: 'right' | 'wrong';
}

interface CardsParams {
  id?: string;
}

const GamePage: FC = (): ReactElement => {
  const { cards, gameMode } = useTypedSelector((state) => ({
    ...state.cards,
    ...state.app,
  }));
  const { fetchCards, setGameResult, setGameMode } = useActions();
  const history = useHistory();
  const idFromParams = useParams<CardsParams>()?.id;

  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswerType[]>([]);
  const [highlightedStartButton, setHighlightedStartButton] = useState(false);
  const [disabledCards, setDisabledCards] = useState<number[]>([]);

  useEffect(() => {
    if (idFromParams) {
      fetchCards(Number(idFromParams));
    }
  }, []);

  useEffect(() => {
    if (isGameStarted && !gameMode) {
      setIsGameStarted(false);
    }
    if (highlightedStartButton && !gameMode) {
      setHighlightedStartButton(false);
    }
    if (userAnswers.length !== 0 && !gameMode) {
      setUserAnswers([]);
    }
    if (disabledCards.length > 0 && !gameMode) {
      setDisabledCards([]);
    }
  }, [gameMode]);

  const finishGame = () => {
    const wrongAnswers = userAnswers.reduce((wrongAnswerNumber, current) => {
      if (current.type === 'wrong') {
        return wrongAnswerNumber + 1;
      }
      return wrongAnswerNumber;
    }, 0);
    setGameResult({ wrongAnswers });
    history.push('/result');
    setGameMode(false);
  };

  useEffect(() => {
    if (userAnswers.length > 30) {
      finishGame();
    }
  }, [userAnswers]);

  const playSoundHandler = () => {
    playSound(shuffledCards[0]);
  };

  const startGameHandler = () => {
    setIsGameStarted(true);
    const justShuffledCards = shuffleCards(cards);
    playSound(justShuffledCards[0]);
    setShuffledCards(justShuffledCards);
  };

  const cardClickInGameModeHandler: GameClickHandlerType = (cardId) => {
    if (!isGameStarted) {
      setHighlightedStartButton(true);
      return;
    }
    if (cardId === shuffledCards[0].id) {
      setDisabledCards((disabledCardsState) =>
        disabledCardsState.concat(cardId)
      );
      setUserAnswers(
        userAnswers.concat({ id: userAnswers.length, type: 'right' })
      );
      if (shuffledCards.length === 1) {
        finishGame();
        return;
      }
      playSound(shuffledCards[1]);
      setShuffledCards(shuffledCards.slice(1));
    } else {
      setUserAnswers(
        userAnswers.concat({ id: userAnswers.length, type: 'wrong' })
      );
    }
  };

  return (
    <>
      <div className="game-progress-bar">
        {userAnswers.length !== 0 &&
          userAnswers.map((answer) => (
            <Star
              key={answer.id}
              width={50}
              height={50}
              fill={answer.type === 'right' ? 'gold' : 'none'}
            />
          ))}
      </div>
      <div className="game-cards-container">
        {cards.map((card) => (
          <GameCard
            key={card.id}
            {...card}
            isGameMode={gameMode}
            disabled={disabledCards.some(
              (disabledCardId) => disabledCardId === card.id
            )}
            gameClickHandler={cardClickInGameModeHandler}
          />
        ))}
      </div>
      <div className="game-control-wrapper">
        {gameMode && (
          <GameControl
            isGameStarted={isGameStarted}
            isHeighlightStart={highlightedStartButton}
            onStart={startGameHandler}
            onRepeat={playSoundHandler}
          />
        )}
      </div>
    </>
  );
};

export default GamePage;

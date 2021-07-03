import { FC, ReactElement, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import GameCard from '../game-card/game-card';
import useTypedSelector from '../../hooks/useTypedSelector';
import { CardType } from '../../types/cards';
import Star from '../icons/Star';
import './game-page.scss';
import GameControl from '../game-control/GameControl';
import Loader from '../loader';
import useActions from '../../hooks/useActions';
import rightAnswerSound from '../../static/sounds/right.wav';
import wrongAnswerSound from '../../static/sounds/wrong.wav';
import playSound from '../../helpers/playSound';

const shuffleCards = (cards: CardType[]): CardType[] =>
  cards.concat().sort(() => Math.random() - 0.5);

interface UserAnswerType {
  id: number;
  type: 'right' | 'wrong';
}

interface CardsParams {
  id?: string;
}

const GamePage: FC = (): ReactElement => {
  const { cards, gameMode, isLoading } = useTypedSelector((state) => ({
    ...state.cards,
    ...state.app,
  }));

  const {
    fetchCards,
    setGameResult,
    setGameMode,
    setIsLoading,
    setSessionStatistic,
  } = useActions();
  const history = useHistory();
  const idFromParams = useParams<CardsParams>()?.id;

  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswerType[]>([]);
  const [highlightedStartButton, setHighlightedStartButton] = useState(false);
  const [disabledCards, setDisabledCards] = useState<number[]>([]);

  useEffect(() => {
    if (idFromParams) {
      (async () => {
        setIsLoading(true);
        await fetchCards(Number(idFromParams));
        setTimeout(setIsLoading.bind(null, false), 1000);
      })();
    }
  }, [idFromParams]);

  useEffect(() => {
    if (cards.length > 0) {
      setSessionStatistic(cards);
    }
  }, [cards]);

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
    playSound(shuffledCards[0].soundSrc);
  };

  const startGameHandler = () => {
    setIsGameStarted(true);
    const justShuffledCards = shuffleCards(cards);
    playSound(justShuffledCards[0].soundSrc);
    setShuffledCards(justShuffledCards);
  };

  const clickOnFrontHandler = (soundSrc: string): void => {
    if (soundSrc) {
      const audio = new Audio(soundSrc);
      audio.volume = 0.2;
      audio.play();
    }
  };

  const cardClickInGameModeHandler = (cardId: number) => {
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
      playSound(rightAnswerSound, () => {
        playSound(shuffledCards[1].soundSrc);
      });
      setShuffledCards(shuffledCards.slice(1));
    } else {
      playSound(wrongAnswerSound);
      setUserAnswers(
        userAnswers.concat({ id: userAnswers.length, type: 'wrong' })
      );
    }
  };

  if (isLoading) {
    return <Loader />;
  }

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
        {cards.map((card) => {
          const cardClickHandler = gameMode
            ? cardClickInGameModeHandler.bind(null, card.id)
            : clickOnFrontHandler.bind(null, card.soundSrc);

          return (
            <GameCard
              key={card.id}
              {...card}
              isGameMode={gameMode}
              disabled={disabledCards.some(
                (disabledCardId) => disabledCardId === card.id
              )}
              gameClickHandler={cardClickHandler}
            />
          );
        })}
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

import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { FC, ReactElement, useEffect, useState } from 'react';
import { Star } from '@material-ui/icons';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import WordCard, { GameClickHandlerType } from '../WordCard';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import { CardType } from '../../types/cards';

const useStyles = makeStyles({
  star: {
    width: 50,
    height: 50,
  },
  goldStar: {
    fill: 'gold',
  },
  outlinedStar: {
    fill: 'white',
    stroke: 'black',
  },
  container: {
    perspective: 1000,
  },
  highlight: {
    boxShadow: '0 0 17px 10px pink',
  },
  gameProgressBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

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

const CardsPage: FC = (): ReactElement => {
  const classes = useStyles();
  const { currentCategoryId, cards, gameMode } = useTypedSelector((state) => ({
    ...state.category,
    ...state.cards,
    ...state.app,
  }));
  const { fetchCards, setGameResult, setGameMode } = useActions();
  const history = useHistory();

  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswerType[]>([]);
  const [highlightedStartButton, setHighlightedStartButton] = useState(false);
  const [disabledCards, setDisabledCards] = useState<number[]>([]);

  useEffect(() => {
    if (currentCategoryId) {
      fetchCards(currentCategoryId);
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
    const wrongAnswersNumber = userAnswers.filter(
      (answer) => answer.type === 'wrong'
    ).length;
    console.log(wrongAnswersNumber);
    if (wrongAnswersNumber > 3) {
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
      console.log('Right!');
      setDisabledCards((disabledCardsState) =>
        disabledCardsState.concat(cardId)
      );
      setUserAnswers(
        (
          [{ id: userAnswers.length, type: 'right' }] as UserAnswerType[]
        ).concat(userAnswers)
      );
      if (shuffledCards.length === 1) {
        finishGame();
        return;
      }
      playSound(shuffledCards[1]);
      setShuffledCards(shuffledCards.slice(1));
      
    } else {
      setUserAnswers(
        (
          [{ id: userAnswers.length, type: 'wrong' }] as UserAnswerType[]
        ).concat(userAnswers)
      );
    }
  };

  return (
    <main>
      <Box className={classes.gameProgressBox}>
        {userAnswers.length !== 0 &&
          userAnswers.map((answer) => (
            <Star
              key={answer.id}
              className={clsx(
                classes.star,
                answer.type === 'right'
                  ? classes.goldStar
                  : classes.outlinedStar
              )}
            />
          ))}
      </Box>
      <Grid
        className={classes.container}
        justify="center"
        container
        spacing={3}
      >
        {currentCategoryId ? (
          cards.map((card) => (
            <Grid item key={card.id} lg={3} md={3}>
              <WordCard
                id={card.id}
                imgSource={card.imageSrc}
                wordText={card.title}
                translatedWordText={card.translatedTitle}
                listenSource={card.soundSrc}
                isGameMode={gameMode}
                disabled={disabledCards.some(
                  (disabledCardId) => disabledCardId === card.id
                )}
                gameClickHandler={cardClickInGameModeHandler}
              />
            </Grid>
          ))
        ) : (
          <Typography color="secondary" variant="h5">
            Category not selected...
          </Typography>
        )}
        {gameMode && (
          <Box>
            {isGameStarted ? (
              <Button
                variant="contained"
                color="primary"
                onClick={playSoundHandler}
              >
                Repeat
              </Button>
            ) : (
              <Button
                className={clsx(highlightedStartButton && classes.highlight)}
                variant="contained"
                color="secondary"
                onClick={startGameHandler}
              >
                Start game
              </Button>
            )}
          </Box>
        )}
      </Grid>
    </main>
  );
};

export default CardsPage;

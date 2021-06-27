import { FC, ReactElement, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    minWidth: 230,
    transform: 'rotateY(0)',
    transformStyle: 'preserve-3d',
    transitionDuration: '1s',
    transitionProperty: 'transform',
  },
  card: {
    height: 237,
  },
  actionArea: {
    height: '100%',
  },
  img: {
    width: '100%',
    height: 170,
    transition: 'height',
    transitionDuration: '0.8s',
  },
  fullModeImg: {
    position: 'absolute',
    top: 0,
    height: '100%',
  },
  content: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    height: 35,
    padding: 16,
    '&:last-child': {
      paddingBottom: 16,
    },
  },
  text: {
    alignSelf: 'flex-end',
  },
  flipBtn: {
    position: 'absolute',
    right: 0,
    bottom: '7px',
  },
  flipped: {
    transform: 'rotateY(180deg)',
  },
  back: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
});

interface WordCardProps {
  id: number;
  imgSource: string;
  wordText: string;
  translatedWordText: string;
  listenSource: string;
  isGameMode: boolean;
  disabled: boolean;
  gameClickHandler: GameClickHandlerType;
}

export type GameClickHandlerType = (cardId: number) => void;

const WordCard: FC<WordCardProps> = ({
  id,
  imgSource,
  wordText,
  translatedWordText,
  listenSource,
  isGameMode,
  disabled,
  gameClickHandler,
}): ReactElement => {
  const classes = useStyles();
  const [flippedState, setFlippedState] = useState(false);
  const cardContainer = useRef<HTMLDivElement>(null);

  const loopButtonHandler = (): void => {
    setFlippedState(true);
    if (cardContainer.current) {
      const leaveHandler = () => {
        setTimeout(() => {
          setFlippedState(false);
        }, 1000);
        cardContainer.current?.removeEventListener('mouseleave', leaveHandler);
      };
      cardContainer.current.addEventListener('mouseleave', leaveHandler);
    }
  };

  const clickOnFrontInGameModeHandler = () => {
    gameClickHandler(id);
  };

  const clickOnFrontHandler = () => {
    if (listenSource) {
      const audio = new Audio(listenSource);
      audio.volume = 0.2;
      audio.play();
    }
  };

  return (
    <div
      className={clsx(classes.root, flippedState && classes.flipped)}
      ref={cardContainer}
    >
      <Card className={classes.card}>
        <CardActionArea
          className={classes.actionArea}
          onClick={
            isGameMode ? clickOnFrontInGameModeHandler : clickOnFrontHandler
          }
          disabled={flippedState || disabled}
        >
          <CardMedia
            className={clsx(classes.img, isGameMode && classes.fullModeImg)}
            image={imgSource}
            title={wordText}
          />
          <CardContent
            className={clsx(classes.content, isGameMode && classes.hidden)}
          >
            <Typography className={classes.text} variant="h5">
              {wordText}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton
          className={clsx(classes.flipBtn, isGameMode && classes.hidden)}
          onClick={loopButtonHandler}
          disabled={flippedState}
        >
          <LoopIcon />
        </IconButton>
      </Card>
      <Card className={classes.back}>
        <CardContent className={classes.content}>
          <Typography className={classes.text} variant="h5">
            {translatedWordText}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default WordCard;

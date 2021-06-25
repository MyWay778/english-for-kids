import {
  FC,
  ReactElement,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
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
    maxWidth: 200,
    transform: 'rotateY(0)',
    transformStyle: 'preserve-3d',
    transitionDuration: '1s',
    transitionProperty: 'transform',
  },
  img: {
    height: 100,
  },
  content: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
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
    height: 64,
    bottom: 0,
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
  },
});

interface WordCardProps {
  imgSource: string;
  wordText: string;
  translatedWordText: string;
  listenSource: string;
}

const WordCard: FC<WordCardProps> = ({
  imgSource,
  wordText,
  translatedWordText,
  listenSource,
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
      <Card>
        <CardActionArea onClick={clickOnFrontHandler} disabled={flippedState}>
          <CardMedia
            className={classes.img}
            image={imgSource}
            title={wordText}
          />
          <CardContent className={classes.content}>
            <Typography className={classes.text} variant="h5">
              {wordText}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton
          className={classes.flipBtn}
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

import { FC, ReactElement } from 'react';
import clsx from 'clsx';
import {
  Box,
  Card,
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
    transitionProperty: 'transform'
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
    top: '50%',
    transform: 'translateY(-50%)',
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
}

const WordCard: FC<WordCardProps> = ({
  imgSource,
  wordText,
  translatedWordText,
}): ReactElement => {
  const classes = useStyles();
  return (
    <Box className={`${classes.root} ${classes.flipped}`}>
      <Card>
        <CardMedia className={classes.img} image={imgSource} title={wordText} />
        <CardContent className={classes.content}>
          <Typography className={classes.text} variant="h5">
            {wordText}
          </Typography>
          <IconButton className={classes.flipBtn}>
            <LoopIcon />
          </IconButton>
        </CardContent>
      </Card>
      <Card className={classes.back}>
        <CardContent className={classes.content}>
          <Typography className={classes.text} variant="h5">
            {translatedWordText}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WordCard;

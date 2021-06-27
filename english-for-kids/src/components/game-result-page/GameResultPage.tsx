import { Grid, makeStyles, Typography } from '@material-ui/core';
import { FC } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import thumbUpImage from '../../static/images/emoji/thumbs-up.webp';
import gladImage from '../../static/images/emoji/glad.webp';
import sadImage from '../../static/images/emoji/sad.webp';

const useStyles = makeStyles({
  container: {
    rowGap: 15,
  },
  image: {
    marginTop: 30,
  },
});

const GameResultPage: FC = () => {
  const classes = useStyles();
  const { gameResult } = useTypedSelector((state) => state.game);

  if (!gameResult) {
    return <p>Oops! Something went wrong</p>;
  }

  let mistakesMessage: string;
  let congratulationsMessage = 'Congratulations, you won!';
  let resultImage: string;

  if (gameResult.wrongAnswers > 0) {
    resultImage = gladImage;
    if (gameResult.wrongAnswers === 1) {
      mistakesMessage = 'You made one mistake!';
    } else if (gameResult.wrongAnswers <= 3) {
      mistakesMessage = `You made ${gameResult.wrongAnswers} mistakes!`;
    } else {
      congratulationsMessage = 'Oops!...'
      mistakesMessage = 'You\'ve made too many mistakes.';
      resultImage = sadImage;
    }
  } else {
    mistakesMessage = 'Without mistakes!'
    resultImage = thumbUpImage;
  }

  return (
    <Grid
      container
      className={classes.container}
      direction="column"
      alignItems="center"
    >
      <Typography color="secondary" variant="h2">
        {congratulationsMessage}
      </Typography>
      <Typography color="primary" variant="h4">
        {mistakesMessage}
      </Typography>
      <img className={classes.image} src={resultImage} alt="win image" />
    </Grid>
  );
};

export default GameResultPage;

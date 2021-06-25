import { Box, Grid, makeStyles } from '@material-ui/core';
import { FC, ReactElement, useEffect } from 'react';
import { Star } from '@material-ui/icons';
import WordCard from '../WordCard';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

const useStyles = makeStyles({
  star: {
    fill: 'gold',
  },
  container: {
    perspective: 1000,
  },
});

const imgS =
  'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/angry.jpg';
const listenS =
  'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/audio/angry.mp3';

const CardsPage: FC = (): ReactElement => {
  const classes = useStyles();
  const { currentCategoryId } = useTypedSelector((state) => state.category);
  const { cards } = useTypedSelector((state) => state.cards);
  const { fetchCards } = useActions();

  useEffect(() => {
    if (currentCategoryId) {
      fetchCards(currentCategoryId);
    }
  }, []);

  return (
    <main>
      <Box>
        <Star className={classes.star} />
      </Box>
      <Grid className={classes.container} justify="center" container spacing={3}>
        {cards.map((card) => (
          <Grid item lg={3} md={3}>
            <WordCard
              imgSource={card.imageSrc}
              wordText={card.title}
              translatedWordText={card.translatedTitle}
              listenSource={card.soundSrc}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default CardsPage;

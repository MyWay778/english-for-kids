import { Box, Grid, makeStyles } from '@material-ui/core';
import { FC, ReactElement } from 'react';
import { Star } from '@material-ui/icons';
import WordCard from '../WordCard';

const useStyles = makeStyles({
  star: {
    fill: 'gold',
  }, 
  container: {
    perspective: 1000
  }
});

const imgS = 'https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/rslang/english-for.kids.data/img/angry.jpg';


const CategoryPage: FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <main>
      <Box>
        <Star className={classes.star} />
      </Box>
      <Grid className={classes.container} container>
        <Grid item xs>
          <WordCard imgSource={imgS} wordText="Angry" translatedWordText="Злой"/>
        </Grid>
      </Grid>
    </main>
  );
};

export default CategoryPage;

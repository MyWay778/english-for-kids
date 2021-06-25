import { Grid, makeStyles } from '@material-ui/core';
import { FC, ReactElement } from 'react';
import CategoryCard from '../category-card/CategoryCard';

const useStyles = makeStyles({});

const ChooseCategoryPage: FC = (): ReactElement => (
  <Grid container justify="center">
    <Grid item lg={10}>
      <Grid justify="space-around" container>
        <CategoryCard />
      </Grid>
    </Grid>
  </Grid>
);

export default ChooseCategoryPage;

import { Grid, makeStyles } from '@material-ui/core';
import { FC, ReactElement } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import CategoryCard from '../category-card/CategoryCard';

const useStyles = makeStyles({});

const ChooseCategoryPage: FC = (): ReactElement => {
  const { categories } = useTypedSelector((state) => state.category);

  return (
    <Grid container justify="center" spacing={5}>
      {categories.length !== 0 ? (
        categories.map((category) => (
          <Grid item key={category.id}>
            <CategoryCard id={category.id} title={category.title} imageSrc={category.imageSrc} />
          </Grid>
        ))
      ) : (
        <p>No categories</p>
      )}
    </Grid>
  );
};

export default ChooseCategoryPage;

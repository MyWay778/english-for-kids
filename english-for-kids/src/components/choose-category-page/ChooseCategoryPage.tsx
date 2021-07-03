import { FC, ReactElement } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import CategoryCard from '../category-card/CategoryCard';
import Loader from '../loader';
import './choose-category-page.scss';

const ChooseCategoryPage: FC = (): ReactElement => {
  const { categories, gameMode, isLoading } = useTypedSelector((state) => ({...state.category, ...state.app}));
  if (isLoading) {
    return <Loader/>
  }

  return (
    <div className="category-container">
      {categories.length !== 0 ? (
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            imageSrc={category.imageSrc}
            isGameMode={gameMode}
          />
        ))
      ) : (
        <p>No categories</p>
      )}
    </div>
  );
};

export default ChooseCategoryPage;


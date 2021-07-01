import { FC, ReactElement } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import CategoryCard from '../category-card/CategoryCard';
import './choose-category-page.scss';

const ChooseCategoryPage: FC = (): ReactElement => {
  const { categories, gameMode } = useTypedSelector((state) => ({...state.category, ...state.app}));
  console.log(gameMode)
  return (
    <div className="category-container">
      {categories.length !== 0 ? (
        categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            title={category.title}
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


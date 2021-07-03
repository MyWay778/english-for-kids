import clsx from 'clsx';
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import './category-card.scss';

interface CategoryCardProps {
  id: number;
  name: string;
  imageSrc: string;
  isGameMode: boolean;
}

const CategoryCard: FC<CategoryCardProps> = ({
  id,
  name,
  imageSrc,
  isGameMode,
}): ReactElement => {
  const {changeCategory} = useActions();
  const categoryClickHandler = (): void => {
    changeCategory({id, name});
  }

  return (
    <div className="category-card">
      <Link
        className="category-card__action-area"
        to={`/cards/${id}`}
        onClick={categoryClickHandler}
      >
        <div
          className={clsx(
            'category-card__media',
            isGameMode && 'category-card__media_game-mode'
          )}
        >
          <img className="category-card__avatar" src={imageSrc} alt={name} />
        </div>
        <h4 className="category-card__title">{name}</h4>
      </Link>
    </div>
  );
};

export default CategoryCard;

import clsx from 'clsx';
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './category-card.scss';

interface CategoryCardProps {
  id: number;
  title: string;
  imageSrc: string;
  isGameMode: boolean;
}

const CategoryCard: FC<CategoryCardProps> = ({
  id,
  title,
  imageSrc,
  isGameMode,
}): ReactElement => (
  <div className="category-card">
    <Link className="category-card__action-area" to={`/cards/${id}`}>
      <div className={clsx('category-card__media', isGameMode && 'category-card__media_game-mode')}>
        <img className="category-card__avatar" src={imageSrc} alt={title} />
      </div>
      <h4 className="category-card__title">{title}</h4>
    </Link>
  </div>
);

export default CategoryCard;

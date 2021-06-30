import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './category-card.scss';

interface CategoryCardProps {
  id: number;
  title: string;
  imageSrc: string;
}

const CategoryCard: FC<CategoryCardProps> = ({
  id,
  title,
  imageSrc,
}): ReactElement => (
  <div className="category-card">
    <Link className="category-card__action-area" to={`/cards/${id}`}>
      <div className="category-card__media">
        <img className="category-card__avatar" src={imageSrc} alt={title} />
      </div>
      <h4 className="category-card__title">{title}</h4>
    </Link>
  </div>
);

export default CategoryCard;

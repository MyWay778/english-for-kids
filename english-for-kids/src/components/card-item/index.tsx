import {FC, ReactElement} from 'react';
import './styles.scss';

interface CardItemProps {
  title: string;
}

const CardItem: FC<CardItemProps> = ({title, ...props}): ReactElement => (
  <div className="admin-page-category-card-row">
    <span className="admin-page-category-card-row--title">{title}: </span>
    <div className="admin-page-category-card-row--value admin-page-category-card-row--value_text">
      {props.children}
    </div>
  </div>
);

export default CardItem;

import { FC, ReactElement } from 'react';
import './styles.scss';

interface CardTitleProps {
  title: string;
}

const CardTitle: FC<CardTitleProps> = ({ title }): ReactElement => (
  <h5 className="admin-page-category-card-control-title">{title}</h5>
);

export default CardTitle;

import { FC, ReactElement } from 'react';
import './styles.scss';

const CardControl: FC = (props): ReactElement => (
  <div className="admin-page-category-control">{props.children}</div>
);

export default CardControl;

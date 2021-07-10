import {FC, ReactElement} from 'react';
import './styles.scss';

interface CardAddItemProps {
  itemName: string;
}

const CardAddItem: FC<CardAddItemProps> = ({itemName}): ReactElement => (
  <li>
    <div className="admin-page-category-card admin-page-category-card-control">
      <h5 className="admin-page-category-card-control-title">
        Add {itemName}
      </h5>
      <div className="admin-page-category-card-control-buttons">
        <button className="admin-page-category-card-control--btn"/>
      </div>
    </div>
  </li>
);

export default CardAddItem;

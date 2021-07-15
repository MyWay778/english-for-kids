import {FC, ReactElement} from 'react';
import './styles.scss';

interface CardAddItemProps {
  itemName: string
  onClick: () => void;
}

const CardAddItem: FC<CardAddItemProps> = ({itemName, onClick}): ReactElement => (
  <li>
    <div className="admin-page-category-card admin-page-category-card-control" onClick={onClick}>
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

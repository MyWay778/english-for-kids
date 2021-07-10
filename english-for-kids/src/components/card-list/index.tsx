import {FC, ReactElement} from 'react';
import './styles.scss';

const CardList: FC= (props): ReactElement => (
    <ul className="admin-page-categories-list">
      {props.children}
    </ul>
  );

export default CardList;

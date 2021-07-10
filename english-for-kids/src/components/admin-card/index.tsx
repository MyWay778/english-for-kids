/* eslint-disable arrow-body-style */
import {FC, ReactElement} from 'react';
import './styles.scss';

const AdminCard: FC = (props): ReactElement => {
  return (
    <div className="admin-page-category-card">
      {props.children}
    </div>
  );
};

export default AdminCard;

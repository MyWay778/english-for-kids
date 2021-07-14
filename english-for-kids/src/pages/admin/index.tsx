import React, {FC, ReactElement} from 'react';
import {Redirect} from 'react-router-dom';
import './styles.scss';
import useTypedSelector from '../../hooks/useTypedSelector';
import AdminCategoryList from '../../components/admin-category-list';

import AdminWordsList from '../../components/admin-words-list';

const AdminPage: FC = (props): ReactElement => {
  const {categories, cards, user} = useTypedSelector(state => ({...state.game, ...state.auth}));

  // if (!user) {
  //   <Redirect to="/"/>
  // }

  const edit = true;
  const page = 'words';


  return (
    <div className="admin-page">
      <h2 className="admin-page-title">Categories</h2>
      {
        page !== 'words' ? <AdminWordsList words={cards} edit={true}/>:  <AdminCategoryList categories={categories} edit={false}/>
      }
    </div>
  );
};

export default AdminPage;

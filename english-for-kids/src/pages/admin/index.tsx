import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './styles.scss';
import useTypedSelector from '../../hooks/useTypedSelector';
import AdminCategoryList from '../../components/admin-category-list';
import AdminWordsList from '../../components/admin-words-list';

const AdminPage: FC = (): ReactElement => {
  const {adminCategories, cards} = useTypedSelector(state => ({...state.adminPanel, ...state.auth, ...state.game}));
  const {path} = useRouteMatch();

  return (
    <div className="admin-page">
      <Switch>
        <Route exact path={path} render={() => <AdminCategoryList categories={adminCategories}/>}/>
        <Route path={`${path}/category/:id`} render={() => <AdminWordsList words={cards}/>}/>
      </Switch>
    </div>
  );
};

export default AdminPage;

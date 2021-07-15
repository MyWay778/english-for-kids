import React, {FC, ReactElement, useEffect, useState} from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './styles.scss';
import useTypedSelector from '../../hooks/useTypedSelector';
import AdminCategoryList from '../../components/admin-category-list';
import AdminWordsList from '../../components/admin-words-list';
import useActions from '../../hooks/useActions';


const AdminPage: FC = (props): ReactElement => {
  const {adminCategories, cards} = useTypedSelector(state => ({...state.adminPanel, ...state.auth, ...state.game}));
  const{fetchAdminCategories} = useActions();
  const {path} = useRouteMatch();

  useEffect(() => {
    fetchAdminCategories();
  }, []);

  const edit = true;
  const page = 'words';

  return (
    <div className="admin-page">
      <Switch>
        <Route exact path={path} render={() => <AdminCategoryList edit={false} categories={adminCategories}/>}/>
        <Route path={`${path}/category/:id`} render={() => <AdminWordsList edit={false} words={cards}/>}/>
      </Switch>
    </div>
  );
};

export default AdminPage;

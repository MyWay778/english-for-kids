import React, { FC, ReactElement, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import AsideMenu from './components/aside-menu/AsideMenu';
import ChooseCategoryPage from './components/choose-category-page/ChooseCategoryPage';
import GamePage from './components/game-page/GamePage';
import useActions from './hooks/useActions';
import GameResultPage from './components/game-result-page/GameResultPage';
import './styles/app.scss';
import Footer from './components/footer';
import StatisticPage from './pages/statistic';
import Modal from './components/modal';
import LoginForm from './components/login-form';
import useTypedSelector from './hooks/useTypedSelector';
import AdminPage from './pages/admin';

const App: FC = (): ReactElement => {
  const {isOpenModal, user} = useTypedSelector(state => ({...state.app, ...state.auth}));
  const {identify} = useActions();

  useEffect(() => {
    identify();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <AsideMenu />
      { isOpenModal && <Modal>
        <LoginForm/>
      </Modal>}
      <main className="main">
        <Switch>
          <Route exact path="/">
            <ChooseCategoryPage />
          </Route>
          <Route path="/cards">
            <GamePage />
          </Route>
          <Route exact path="/result">
            <GameResultPage />
          </Route>
          <Route exact path="/statistic" component={StatisticPage}/>
          {user?.role === 'admin' ? <Route  path="/admin" component={AdminPage}/> : <Redirect to="/"/>}

        </Switch>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;

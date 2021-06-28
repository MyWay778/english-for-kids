import { FC, ReactElement, useEffect } from 'react';
import { Container } from '@material-ui/core/';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import AsideMenu from './components/aside-menu/AsideMenu';
import ChooseCategoryPage from './components/choose-category-page/ChooseCategoryPage';
import CardsPage from './components/cards-page/CardsPage';
import useActions from './hooks/useActions';
import GameResultPage from './components/game-result-page/GameResultPage';

const App: FC = (): ReactElement => {
  const { fetchCategories } = useActions();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AsideMenu />
        <Container>
          <Switch>
            <Route exact path="/">
              <ChooseCategoryPage />
            </Route>
            <Route path="/cards/:id">
              <CardsPage />
            </Route>
            <Route exact path="/result">
              <GameResultPage />
            </Route>
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;

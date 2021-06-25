import { FC, ReactElement } from 'react';
import { Container } from '@material-ui/core/';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import AsideMenu from './components/aside-menu/AsideMenu';
import ChooseCategoryPage from './components/choose-category-page/ChooseCategoryPage';
import CardsPage from './components/cards-page/CardsPage';


const App: FC = (): ReactElement => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <AsideMenu />
      <Container>
        <Switch>
          <Route exact path="/">
            <ChooseCategoryPage />
          </Route>
          <Route exact path="/cards">
            <CardsPage />
          </Route>
        </Switch>
      </Container>
    </div>
  </BrowserRouter>
);
export default App;

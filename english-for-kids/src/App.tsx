import { FC, ReactElement } from 'react';
import { Container } from '@material-ui/core/';
import Header from './components/header/Header';
import AsideMenu from './components/aside-menu/AsideMenu';
import CategoryPage from './components/category-page/CategoryPage';


const App: FC = (): ReactElement => (
  <div className="App">
    <Header/>
    <AsideMenu />
    <Container>
      <CategoryPage/>
    </Container>
  </div>
);
export default App;

import { FC, ReactElement} from 'react';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import './aside-menu.scss';
import homeIcon from '../../static/icon/home.svg';
import statsIcon from '../../static/icon/stats.svg'

const AsideMenu: FC = (): ReactElement => {
  const { openedAsideMenu, categories } = useTypedSelector((state) => ({
    ...state.app,
    ...state.game,
  }));
  const { closeAsideMenu, changeCategory} = useActions();

  const navClickHandler = (e: React.SyntheticEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.localName === 'a' ||
      target.parentElement?.localName === 'a' ||
      target.classList.contains('side-menu__close')
    ) {
      closeAsideMenu();
    }
  };

  const clickHandlerCreator = (id: number, name: string): () => void => () => {changeCategory({id, name})};

  return (
    <>
      <nav
        className={clsx('side-menu', openedAsideMenu && 'side-menu_open')}
        onClick={navClickHandler}
      >
        <button className="side-menu__close"></button>
        <ul className="nav-menu">
          <li>
            <Link className="nav-menu__link" to="/">
              <img className="nav-menu__icon" src={homeIcon} alt="Home" />
              <span className="categories-nav__title">Home</span>
            </Link>
          </li>
          <li>
            <Link className="nav-menu__link" to="/statistic">
              <img className="nav-menu__icon" src={statsIcon} alt="Stats" />
              <span className="categories-nav__title">Statistics</span>
            </Link>
          </li>
        </ul>
        <hr className="side-menu__divider" />
        <ul className="categories-nav">
          {categories.map((cat) => (
            <li key={cat.id}>
              <NavLink
                className="categories-nav__link"
                activeClassName="categories-nav__link_active"
                to={`/cards/${cat.id}`}
                onClick={clickHandlerCreator(cat.id, cat.name)}
              >
                <img
                  className="categories-nav__avatar"
                  src={cat.imageSrc}
                  alt={cat.name}
                />
                <span className="categories-nav__title">{cat.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className={clsx('backdrop', openedAsideMenu && 'backdrop_shown')}
        onClick={closeAsideMenu}
      ></div>
    </>
  );
};

export default AsideMenu;

import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import './header.scss';

const Header: FC = (): ReactElement => {
  const { openAsideMenu, setGameMode } = useActions();
  const { gameMode, user } = useTypedSelector((state) => ({
    ...state.app,
    ...state.auth,
  }));

  const switchGameModeHandler = (): void => {
    setGameMode(!gameMode);
  };

  return (
    <header className="header">
      <button className="header__menu-button" onClick={openAsideMenu} />
      <h1 className="header-logo">
        <Link className="header-logo__link" to="/">
          English <span className="header-logo__preposition">for</span>{' '}
          <span className="header-logo__first-color">k</span>
          <span className="header-logo__second-color">i</span>
          <span className="header-logo__third-color">d</span>
          <span className="header-logo__four-color">s</span>
        </Link>
      </h1>
      <label className="play-toggle">
        <input
          className="play-toggle__checkbox"
          type="checkbox"
          onChange={switchGameModeHandler}
          checked={gameMode}
        />
        <span className="play-toggle__toggle-thumb">
          <span className="play-toggle__title play-toggle__title_off">
            Play
          </span>
          <span className="play-toggle__title play-toggle__title_on">
            Train
          </span>
        </span>
      </label>
      {user && (
        <span className="header-user-info">
          <span className="header-user-info__greeting">Hello, </span>
          <span className="header-user-info__user-name">{user.name}!</span>
        </span>
      )}
    </header>
  );
};

export default Header;

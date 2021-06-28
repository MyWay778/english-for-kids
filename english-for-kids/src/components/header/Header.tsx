import React, { FC, ReactElement } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Switch,
  FormControlLabel,
} from '@material-ui/core/';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(10),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    gameModeControl: {
      marginLeft: theme.spacing(10),
    },
    logo: {
      color: '#fff',
      textDecoration: 'none'
    }
  })
);

const Header: FC = (): ReactElement => {
  const classes = useStyles();
  const { openAsideMenu, setGameMode } = useActions();
  const { gameMode } = useTypedSelector((state) => state.app);

  const preventDefault = (e: React.SyntheticEvent) => e.preventDefault();

  const switchGameModeHandler = (): void => {
    setGameMode(!gameMode);
  };

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          edge="start"
          onClick={openAsideMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography className="header__heading" component="h1" variant="h6">
          <Link className={classes.logo} to="/">English for kids</Link>
        </Typography>
        <FormControlLabel
          className={classes.gameModeControl}
          control={
            <Switch onChange={switchGameModeHandler} checked={gameMode} />
          }
          label="Game mode"
          labelPlacement="start"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

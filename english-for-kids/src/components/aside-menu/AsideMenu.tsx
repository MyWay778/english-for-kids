import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import { FC, ReactElement } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import useTypedSelector from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  list: {
    width: 250,
  },
  item: {
    textAlign: 'center',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const AsideMenu: FC = (): ReactElement => {
  const classes = useStyles();
  const { openedAsideMenu } = useTypedSelector((state) => state.app);
  const { closeAsideMenu } = useActions();

  return (
    <Drawer open={openedAsideMenu} onClose={closeAsideMenu}>
      <Box className={classes.buttonBox}>
        <IconButton onClick={closeAsideMenu}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List className={classes.list}>
        <ListItem className={classes.item} button>
          <ListItemText primary="Animals" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AsideMenu;

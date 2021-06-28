import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles,
  Avatar,
} from '@material-ui/core';
import { FC, ReactElement, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
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
    paddingLeft: 35,
  },
  itemAvatar: {
    minWidth: 65,
  },
  itemText: {
    fontWeight: 600,
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  active: {
    color: '#f50057',
  },
});

const categoryTitleSplitter = (categoryTitle: string): string[] => {
  const indexOfBoundary = categoryTitle.indexOf(' ');
  if (indexOfBoundary === -1) {
    return [categoryTitle, ''];
  }
  const primary = categoryTitle.substring(0, indexOfBoundary);
  const secondary = categoryTitle.substring(indexOfBoundary + 1);

  return [primary, secondary];
};

const AsideMenu: FC = (): ReactElement => {
  const classes = useStyles();
  const { openedAsideMenu, categories } = useTypedSelector((state) => ({
    ...state.app,
    ...state.category,
  }));
  const { closeAsideMenu } = useActions();
  const history = useHistory();

  const [activeLink, setActiveLink] = useState<number | null>(null);

  const makeCategoryItemClickHandler = (id: number) => (): void => {
    history.push(`/cards/${id}`);
    setActiveLink(id);
    closeAsideMenu();
  };

  return (
    <Drawer open={openedAsideMenu} onClose={closeAsideMenu}>
      <Box className={classes.buttonBox}>
        <IconButton onClick={closeAsideMenu}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List component="nav" className={classes.list}>
        {categories.map((cat) => {
          const [primary, secondary] = categoryTitleSplitter(cat.title);
          return (
            <ListItem
              key={cat.id}
              className={clsx(
                classes.item,
                cat.id === activeLink && classes.active
              )}
              button
              onClick={makeCategoryItemClickHandler(cat.id)}
            >
              <ListItemAvatar className={classes.itemAvatar}>
                <Avatar alt="ddd" src={cat.imageSrc} />
              </ListItemAvatar>
              <ListItemText
                classes={{ primary: classes.itemText }}
                primary={primary}
                secondary={secondary}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default AsideMenu;

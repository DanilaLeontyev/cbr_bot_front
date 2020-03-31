import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as CbrLogo } from './../../assets/CbrLogoWhite.svg';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Container, { ContainerProps } from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { openMenu } from '../../store/mainMenu/actions';
import mainMenuItems from './items';
import { MainMenuItem as Item } from './types';
import MainMenuItem from './MainMenuItem';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const MainMenu: React.FC = () => {
  const isOpen = useSelector((state: RootState) => state.mainMenu.isOpen);
  const dispatch = useDispatch();
  const classes = useStyles();

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    dispatch(openMenu(open));
  };

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer(false)}
    >
      <Container
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <CbrLogo width={200} height={100} />
        <Divider />
        <List>
          {mainMenuItems.map((item: Item, index: number): JSX.Element => (
            <MainMenuItem key={item.name} item={item} />
          ))}
        </List>
      </Container>
    </Drawer>
  );
};

export default MainMenu;

import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { openMenu } from '../../store/mainMenu/actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: '#607D8B',
    },
    menuButton: {
      marginRight: theme.spacing(5),
    },
  }),
);

const Header: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => dispatch(openMenu(true))}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            RCR Telegram bot
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

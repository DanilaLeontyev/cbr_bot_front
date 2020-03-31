import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useHistory } from 'react-router-dom';
import { MainMenuItem as Item } from './types';

interface Props {
  item: Item;
}

const MainMenuItem: React.FC<Props> = (props: Props): JSX.Element => {
  const history = useHistory();
  const { icon, link, name } = props.item;

  return (
    <ListItem button={true} onClick={() => {
      history.push(link);
    }}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default MainMenuItem;

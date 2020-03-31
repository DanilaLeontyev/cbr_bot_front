import React from 'react';
import { MainMenuItem } from './types';
import AccountBox from '@material-ui/icons/AccountBox';
import CakeSharp from '@material-ui/icons/CakeSharp';
import Image from '@material-ui/icons/Image';
import Routes from './../AppRouter/routes';

const mainMenuItem: MainMenuItem[] = [
  {
    name: 'Пользователи',
    icon: <AccountBox />,
    link: Routes.USER,
  },
  {
    name: 'Поздравления',
    icon: <CakeSharp />,
    link: Routes.CONGRATULATIONS,
  },
  {
    name: 'Картинки',
    icon: <Image />,
    link: Routes.IMAGES,
  },
];

export default mainMenuItem;

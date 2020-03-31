import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../Header';
import AppRouter from '../AppRouter';
import MainMenu from '../MainMenu';

export const Layout: React.FC = (): JSX.Element => {

  return (
    <Container disableGutters={true}>
      <Grid item={true} xs={12}>
        <Header />
      </Grid>
      <Grid item={true} xs={12} container={true}>
        <MainMenu />
        <AppRouter />
      </Grid>
    </Container>
  );
};

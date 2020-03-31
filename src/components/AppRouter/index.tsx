import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserTable from '../Tables/UserTable';
import CongratulationTable from '../Tables/CongratulationTable';
import Routes from './routes';
import ImageList from '../ImageList';

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <div>main Page</div>
      </Route>
      <Route path={Routes.USER}>
        <UserTable />
      </Route>
      <Route path={Routes.CONGRATULATIONS}>
        <CongratulationTable />
      </Route>
      <Route path={Routes.IMAGES}>
        <ImageList />
      </Route>
    </Switch>
  );
};

export default AppRouter;

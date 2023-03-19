import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/404" component={NotFoundPage} />
      <Redirect to={'/'} />
    </Switch>
  </Suspense>
);

export default Routes;

import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

export const Home = lazy(() => import('@pages/Home'));
export const Recommend = lazy(() => import('@pages/Recommend'));

const renderRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact={true} path='/' render={() => <Redirect to='recommend' />} />
        <Route path='/recommend' component={Recommend} />
      </Switch>
    </Suspense>
  );
};

export default renderRouter;

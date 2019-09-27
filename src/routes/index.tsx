import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';

const HomeComponent = lazy(() => import('@pages/Home'));
const Home = (props: any) => {
  return (
    <Suspense fallback={null}>
      <HomeComponent {...props} />
    </Suspense>
  );
};

const RecommendComponent = lazy(() => import('@pages/Recommend'));
const Recommend = (props: any) => {
  return (
    <Suspense fallback={null}>
      <RecommendComponent {...props} />
    </Suspense>
  );
};

const SingersComponent = lazy(() => import('@pages/Singers'));
const Singers = (props: any) => {
  return (
    <Suspense fallback={null}>
      <SingersComponent {...props} />
    </Suspense>
  );
};

const RankComponent = lazy(() => import('@pages/Rank'));
const Rank = (props: any) => {
  return (
    <Suspense fallback={null}>
      <RankComponent {...props} />
    </Suspense>
  );
};

const SearchComponent = lazy(() => import('@pages/Search'));
const Search = (props: any) => {
  return (
    <Suspense fallback={null}>
      <SearchComponent {...props} />
    </Suspense>
  );
};

const routes = [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to='/recommend' />
      },
      {
        path: '/recommend',
        component: Recommend
      },
      {
        path: '/singers',
        component: Singers
      },
      {
        path: '/rank',
        component: Rank
      }
    ]
  }
];

// export default routes;
export { Home, Recommend, Singers, Rank, Search };

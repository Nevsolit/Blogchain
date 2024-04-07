import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loading } from '~/components';
import { ROUTES } from './constants';

// layouts
const MainLayout = lazy(() => import('~/layouts/MainLayout'));
// screens
const HomeScreen = lazy(() => import('~/screens/Home'));
const BlogScreen = lazy(() => import('~/screens/Blog'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* PUBLIC */}
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<HomeScreen />} />
          <Route path={ROUTES.BLOG} element={<BlogScreen />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default AppRoutes;

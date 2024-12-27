import { Route, Routes } from 'react-router-dom';

import { SearchErrorFallback } from '../components/Error/Fallbacks.tsx';
import { QueryBoundary } from '../components/Error/QueryBoundary.tsx';
import { ROUTES } from '../constants/routes.ts';
import BookmarksPage from '../pages/Bookmarks';
import HomePage from '../pages/Home';

const RootRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <QueryBoundary Fallback={SearchErrorFallback}>
            <HomePage />
          </QueryBoundary>
        }
      />
      <Route path={ROUTES.BOOKMARKS} element={<BookmarksPage />} />
    </Routes>
  );
};

export default RootRoutes;

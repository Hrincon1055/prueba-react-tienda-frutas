import { Route, Routes } from 'react-router-dom';
import { FrutasRoutes } from '../frutas';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path='login/*'
          element={
            <PublicRoute>
              <Routes>
                <Route path='/*' element={<LoginPage />} />
              </Routes>
            </PublicRoute>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRoute>
              <FrutasRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

import { useAuth } from 'hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/auth/fetch';
import { Layout } from './Layout';

const Contacts = lazy(() => {
  import('./pages/Contacts/Contacts');
});
const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Registration = lazy(() => import('./pages/Registration/Registration'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const { isLoginIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    return isLoginIn ? <Navigate to={redirectTo} /> : Component;
  };

  const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const shouldRedirect = !isLoginIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  };

  return (
    <>
      {isRefreshing ? (
        <b>Loading...</b>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  redirectTo="/contacts"
                  component={<Registration />}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute redirectTo="/contacts" component={<Login />} />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/contacts" component={<Contacts />} />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/selector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoginIn = useSelector(selectIsLoggedIn);
  return isLoginIn ? <Navigate to={redirectTo} /> : <Component />;
};

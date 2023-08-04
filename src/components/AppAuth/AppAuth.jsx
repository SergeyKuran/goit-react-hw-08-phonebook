import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Div, Header, Nav } from './AppAuth.styled';

export const AppAuth = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Div>
          <Nav to="/register">Register</Nav>
          <Nav to="/login">Sign In</Nav>
        </Div>
      )}
    </Header>
  );
};

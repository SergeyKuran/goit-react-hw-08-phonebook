import { useAuth } from 'hooks/useAuth';
import { Container, Nav } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Container>
        <Nav to="/">Home</Nav>
        {isLoggedIn && <Nav to="/contacts">Contacts</Nav>}
      </Container>
    </>
  );
};

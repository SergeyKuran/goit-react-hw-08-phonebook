import { Button } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/fetch';
import { Div } from './UserMenu.styled';

export const UserMenu = () => {
  const dispath = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <p>Hello, {user.name}</p>
      <Button
        type="button"
        onClick={() => {
          dispath(logOutUser());
        }}
      >
        Logout
      </Button>
    </Div>
  );
};

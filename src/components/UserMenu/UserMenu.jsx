import { Button } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/fetch';

export const UserMenu = () => {
  const dispath = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Hello ${user.name}</p>
      <Button
        type="button"
        onClick={() => {
          dispath(logOutUser());
        }}
      >
        Logout
      </Button>
    </div>
  );
};

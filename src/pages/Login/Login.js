import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/fetch';

const Login = () => {
  const [show, setShow] = useState(false);
  const dispath = useDispatch();

  const handleClick = () => setShow(!show);

  const onSubmitForm = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispath(logInUser(user));
    form.reset();
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            autoComplete="on"
            placeholder="Please enter your email"
          />
          <FormHelperText>We'll never share your email.</FormHelperText>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              name="password"
              type={show ? 'text' : 'password'}
              placeholder="Please enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormHelperText>We'll never share your password.</FormHelperText>
        </FormControl>
        <Stack>
          <Button type="submit" colorScheme="blackAlpha" w="100px">
            Sign in
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Login;

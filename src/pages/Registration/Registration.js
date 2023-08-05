import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Stack,
} from '@chakra-ui/react';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/fetch';

const Registration = () => {
  const [show, setShow] = useState(false);
  const dispath = useDispatch();

  const handleClick = () => setShow(!show);

  const onSubmitForm = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    const user = {
      email: form.elements.email.value,
      name: form.elements.name.value,
      password: form.elements.password.value,
    };

    dispath(registerUser(user));
    form.reset();
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <FormControl isRequired>
          <FormLabel>Full name</FormLabel>
          <Input
            type="text"
            name="name"
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="on"
            required
            placeholder="Please enter your name"
          />
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
              name="password"
              pr="4.5rem"
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
            Register
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default Registration;

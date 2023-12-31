import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputRightElement,
  Button,
  InputGroup,
  Stack,
  Flex,
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
      <Flex align="center" justify="center" flexDirection="column">
        <form onSubmit={onSubmitForm}>
          <FormControl
            isRequired
            maxWidth="450"
            border="1px solid black"
            padding={5}
            borderRadius={8}
          >
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
            <Stack>
              <Button
                type="submit"
                colorScheme="green"
                w="100px"
                ml="auto"
                mr="auto"
                mt={5}
              >
                Register
              </Button>
            </Stack>
          </FormControl>
        </form>
      </Flex>
    </>
  );
};

export default Registration;

import { Box } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/selector';
import { Div } from './Contacts.styled';

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <Box
        boxShadow="dark-lg"
        p="6"
        rounded="md"
        bg="orange.100"
        padding="15px"
        mb="30px"
      >
        <Div>
          <div>
            <title>Your contacts</title>
          </div>
          <div>{isLoading && 'Yours request in progress...'}</div>
          <Filter />
          <ContactForm />
        </Div>
      </Box>
    </>
  );
};

export default Contacts;

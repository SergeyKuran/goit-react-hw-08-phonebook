import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'redux/contacts/selector';
import { Div } from './Contacts.styled';

const Contacts = () => {
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      <Div>
        <div>
          <title>Your contacts</title>
        </div>
        <div>{isLoading && 'Yours request in progress...'}</div>
        <Filter />
        <ContactForm />
      </Div>
    </>
  );
};

export default Contacts;

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/fetch';
import { getIsLoading } from 'redux/contacts/selector';

const Contacts = () => {
  const dispath = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispath(fetchContacts());
  }, [dispath]);

  return (
    <>
      <ContactForm />
      <Filter />
      <div>{isLoading && <ContactList />}</div>
    </>
  );
};

export default Contacts;

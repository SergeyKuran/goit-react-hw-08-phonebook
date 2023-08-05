import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/contacts/fetch';
import { getFilter } from 'redux/contacts/filterSlice';
import { getContacts } from 'redux/contacts/selector';
import { Button, Li, Ul } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const selector = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisible = () =>
    contacts.filter(e => e.name.toLowerCase().includes(selector.toLowerCase()));
  const getVisibleContacts = getVisible();

  return (
    <div>
      <Ul>
        {getVisibleContacts.map(({ id, name, number }) => (
          <Li key={id}>
            {name}: {number}
            <Button
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

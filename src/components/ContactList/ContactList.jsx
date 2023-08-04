import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/fetch';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contacts/selector';
import { Button, Li, Ul } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const selector = useSelector(getFilter);

  const getVisible = () =>
    contacts.filter(e => e.name.toLowerCase().includes(selector.toLowerCase()));
  const getVisibleContacts = getVisible();

  return (
    <div>
      <Ul>
        {getVisibleContacts.map(({ id, name, phone }) => (
          <Li key={id}>
            {name}: {phone}
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from 'redux/contacts/filterSlice';
import { getFilter } from 'redux/contacts/selector';
import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const selector = useSelector(getFilter);

  return (
    <Label>
      Find contact by name
      <Input
        type="text"
        value={selector}
        onChange={e => dispatch(filterName(e.target.value))}
      />
    </Label>
  );
};

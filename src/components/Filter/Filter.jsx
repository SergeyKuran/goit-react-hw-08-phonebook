import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterName } from 'redux/filterSlice';
import { getFilter } from 'redux/contacts/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const selector = useSelector(getFilter);

  return (
    <label>
      Find contact by name
      <input
        type="text"
        value={selector}
        onChange={e => {
          dispatch(filterName(e.target.value));
        }}
      />
    </label>
  );
};

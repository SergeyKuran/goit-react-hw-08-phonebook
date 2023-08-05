import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

export const Button = styled.button`
  font-size: 13px;
  padding: 1px 5px;
  border-radius: 10px;
  border: 1px solid;

  cursor: pointer;

  &:hover {
    color: white;
    background-color: green;
    transition: all 0.5s ease-out;
  }
`;

export const Input = styled.input`
  margin-left: 5px;
  border-radius: 7px;
  border: 1px solid black;
`;

export const Label = styled.label`
  margin-left: 5px;
  border-radius: 7px;
`;

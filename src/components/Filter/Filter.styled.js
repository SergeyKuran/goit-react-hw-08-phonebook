import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input`
  width: 415px;
  margin-left: 10px;
  border-radius: 7px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 2px 10px;
  border-radius: 10px;
`;

import styled from 'styled-components';

export const Ul = styled.ul`
  text-align: start;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
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

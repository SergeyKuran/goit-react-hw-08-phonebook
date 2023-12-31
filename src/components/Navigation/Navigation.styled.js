import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    color: aliceblue;
    transition: all 0.5s ease-out;
    background-color: green;
  }

  &.active {
    color: black;
    background-color: yellow;
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 15px;
`;

export const Container = styled.div`
  display: flex;
`;

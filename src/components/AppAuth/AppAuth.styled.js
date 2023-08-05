import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  border-bottom: 1px solid black;
`;

export const Nav = styled(NavLink)`
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

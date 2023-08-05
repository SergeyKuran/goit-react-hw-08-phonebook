import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 8px 0;
  margin-bottom: 16px;
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
`;

export const Div = styled.div`
  display: flex;
  gap: 15px;
`;

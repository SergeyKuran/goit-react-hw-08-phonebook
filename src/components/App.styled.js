import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;
export const A = styled(NavLink)`
  text-decoration: none;

  &:hover {
    color: green;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  }
`;

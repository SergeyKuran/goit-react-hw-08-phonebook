import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;

  &::hover {
    fill: black;
  }
`;

export const A = styled(NavLink)`
  text-decoration: none;

  &:hover {
    color: green;
  }
`;

export const Title = styled.p`
font-weight: 50;
    font-size: 4;
    text-align: 'center;
`;

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0px;
  gap: 20px;
`;

export const Span = styled.span`
  font-size: 24px;
  color: black;
`;

export const LinkNav = styled(NavLink)`
  font-size: 24px;
  margin: 0;
  text-align: center;
  text-decoration: none;

  color: red;
  &:hover,
  :focus {
    color: green;
  }

  &.active {
    color: blue;
  }
`;

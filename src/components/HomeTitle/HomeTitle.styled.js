import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Div = styled.div`
  text-align: center;
  width: 800px;
  border: 1px solid #76b5c5;
  margin: 0 auto;
  padding: 10px 20px;

  box-shadow: -4px -4px 9px #fff, 11px 11px 21px -8px #000;
  border-radius: 8px;
`;

export const Link = styled(NavLink)`
  color: #063970;
  &:hover,
  :focus {
    color: red;
  }
`;
export const Title = styled.p`
  display: block;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  margin: 20px auto;
  background-color: aqua;
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  max-width: 800px;
  white-space: pre-wrap;
  animation-name: changeColor;
  animation-duration: 3000ms;
  animation-iteration-count: infinite;
  @keyframes changeColor {
    0% {
      color: green;
    }
    50% {
      color: orange;
    }
    100% {
      color: green;
    }
  }
`;

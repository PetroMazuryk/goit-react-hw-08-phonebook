import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  margin: 20px;
`;
export const Button = styled.button`
  display: block;
  width: 240px;
  padding: 9px;
  text-align: center;
  margin: 20px auto;

  background-color: rgba(177, 163, 196, 0.5);
  border: 1px solid #abdbe3;
  border-radius: 5px;
  font-size: 18px;

  color: #184c89;
  &:hover,
  &:focus {
    background-color: #b76dd6;
    border: 1px solid rgba(102, 44, 182, 0.5);
    color: white;
  }
`;

export const LinkBtn = styled(Link)`
  text-decoration: none;
`;

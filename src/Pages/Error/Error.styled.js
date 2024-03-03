import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Message = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  color: brown;
  margin-top: 20px;
  background: #fffbd5;
  background: -webkit-linear-gradient(to right, #eb5757, #000000);
  background: linear-gradient(to right, #eb5757, #000000);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  pap: 12px;
  margin: 20px 454px 20px;

  font-size: 22px;
  background-color: #6a79d1;
  box-shadow: 0 0 10px rgb(162, 57, 59);
  color: red;
  font-weight: 600;
  width: 160px;
  padding: 8px 20px;
  border-radius: 12px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    box-shadow: 0 0 6px #0539aa, 0 0 6px #0539aa;
  }
`;

export const Arrow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

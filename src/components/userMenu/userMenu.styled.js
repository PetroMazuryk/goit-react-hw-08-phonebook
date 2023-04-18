import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 10px 0px;
  gap: 15px;
`;
export const LogoImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 0;
  text-align: center;
`;
export const Button = styled.button`
  padding: 5px 10px;
  border: 1px solid #76b5c5;
  border-radius: 5px;
  border: 1px solid #abdbe3;
  background-color: rgba(177, 163, 196, 0.5);
  font-size: 18px;
  &:hover,
  &:focus {
    background-color: #b76dd6;
    border: 1px solid rgba(102, 44, 182, 0.5);
    color: white;
  }
`;

import styled from 'styled-components';

export const FilterWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;
`;

export const FilterInput = styled.input`
  width: 260px;
  font-size: 22px;
  margin: 10px;
  padding: 8px;
  border-radius: 6px;
  box-shadow: -5px -5px 9px #fff inset, 2px 2px 18px -10px #000 inset;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  height: 38px;
  padding: 4px 12px;
  border-radius: 10px;
  background-color: rgba(177, 163, 196, 0.5);
  box-shadow: -3px -3px 9px #fff, 8px 8px 16px -8px #000;
  &:hover {
    transform: scale(1.1);
    color: tomato;
  }
`;

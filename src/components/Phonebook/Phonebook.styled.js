import styled from 'styled-components';

export const List = styled.ul`
  justify-content: space-between;
  padding: 8px 20px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: -4px -4px 9px #fff, 11px 11px 21px -8px #000;

  margin: 20px auto;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: -2px -2px 9px #fff, 8px 8px 18px -6px #000;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  width: 120px;
`;

export const Button = styled.button`
  width: 36px;
  padding: 2px 10px;
  border-radius: 8px;
  margin: 0;
  background-color: rgba(177, 163, 196, 0.5);
  border: 1px solid #abdbe3;
  border-radius: 5px;
  :hover {
    background-color: #ebbcd1;
    color: red;
  }
`;

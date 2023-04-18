import styled from 'styled-components';

export const FormStyled = styled.form`
  position: relative;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px 30px;
  border: 1px solid #76b5c5;
  border-radius: 5px;
  text-align: center;
  box-shadow: -4px -4px 9px #fff, 11px 11px 18px -8px #000;
`;
export const Title = styled.h2`
  display: block;
  margin-bottom: 40px;
  text-shadow: 2px 2px 2px grey, 2px 2px 1px red;
  font-size: 35px;
  color: #042f50;
`;

export const Div = styled.div`
  display: block;
  margin: 20px auto;
  color: #010100;
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 7px 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #76b5c5;
  font-size: 20px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

  &:focus {
    background-color: #eeeee4;
    box-shadow: 0px 0px 8px 2px rgba(10, 2, 0.1, 0.7);
  }
  &::placeholder {
    color: #154c79;
    font-size: 18px;
  }
`;

export const PasswordDiv = styled.div`
  cursor: pointer;
  position: absolute;
  right: 84px;
  bottom: 90px;
  color: #063970;
`;

export const Button = styled.button`
  width: 140px;
  padding: 8px;
  margin: 0 auto;
  background-color: rgba(177, 163, 196, 0.5);
  border: 1px solid #abdbe3;
  border-radius: 5px;
  font-size: 18px;

  color: #154c79;
  &:hover,
  &:focus {
    background-color: #b76dd6;
    border: 1px solid rgba(102, 44, 182, 0.5);
    color: rgb(237, 234, 241);
  }
`;

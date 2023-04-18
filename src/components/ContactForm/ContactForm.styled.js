import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  border-radius: 8px;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 22px;
`;

export const Fieldtyled = styled(Field)`
  display: block;
  min-width: 400px;
  margin: 10px auto;
  margin-bottom: 12px;
  padding: 7px;
  border-radius: 6px;
  font-size: 20px;

  box-shadow: -5px -5px 9px #fff inset, 2px 2px 18px -10px #000 inset;
  &:focus {
    box-shadow: 0px 0px 8px 2px rgba(10, 2, 0.1, 0.7);
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;

  padding: 8px 12px;
  border-radius: 10px;
  background-color: rgba(177, 163, 196, 0.5);
  box-shadow: -3px -3px 9px #fff, 8px 8px 16px -8px #000;
  :hover {
    transform: scale(1.1);
    color: green;
  }
`;

export const ErrMessage = styled(ErrorMessage)`
  font-size: 18px;
  color: red;
`;

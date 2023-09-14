import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled.div`
  max-width: 400px;
`;

export const StyledContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 20px;
  border-radius: 2px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 200px;
`;

export const StyledField = styled(Field)`
  border: 1px solid #e3e6e7;
`;

export const Button = styled.button`
  width: 100px;
  border: 1px solid #e3e6e7;
  border-radius: 8px;
  background: white;
  &:hover , &: focus {
    background-color: blue;
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 15px;
`;

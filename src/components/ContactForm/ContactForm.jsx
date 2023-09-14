import { Formik } from 'formik';
import {
  StyledForm,
  StyledContactForm,
  Label,
  StyledField,
  Button,
  StyledErrorMessage,
} from './ContactForm.styled';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .matches(
      /^[a-zA-Zа-яА-Я]+((['][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <StyledForm>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={ContactSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <StyledContactForm>
          <Label>
            Name
            <StyledField type="text" name="name" required></StyledField>
            <StyledErrorMessage
              name="name"
              component="div"
            ></StyledErrorMessage>
          </Label>
          <Label>
            Number
            <StyledField type="tel" name="number" required></StyledField>
            <StyledErrorMessage
              name="number"
              component="div"
            ></StyledErrorMessage>
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledContactForm>
      </Formik>
    </StyledForm>
  );
};

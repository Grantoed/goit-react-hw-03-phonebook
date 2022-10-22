import { Box } from 'components/Box';

import {
  ContactForm,
  ContactLabel,
  ContactInput,
  SubmitButton,
} from './Form.styled';

export const Form = ({ handleSubmit }) => {
  return (
    <ContactForm onSubmit={handleSubmit}>
      <Box dispay="flex" flexDirection="column" mb="20px">
        <ContactLabel htmlFor="name">Name</ContactLabel>
        <ContactInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="name"
        />
      </Box>
      <Box dispay="flex" flexDirection="column" mb="20px">
        <ContactLabel htmlFor="number">Number</ContactLabel>
        <ContactInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="number"
        />
      </Box>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </ContactForm>
  );
};

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations/operations';
import { useState } from 'react';

import { Notify } from 'notiflix';
import { selectAllContacts } from 'redux/selectors/selectors';
import { Button, Form, FormWrapper, InputForm } from './ContactForm.styled';

const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const contact = { name, number };

    const alreadyExists = contacts.findIndex(item => {
      const name = item.name.toLowerCase();
      const newName = contact.name.toLowerCase();
      return name === newName;
    });

    if (alreadyExists >= 0) {
      Notify.failure(`${contact.name} is already added to contact list`);
      return;
    } else {
      dispatch(addContact(contact));
    }

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <FormWrapper>
        <InputForm
          type="text"
          name="name"
          value={name}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleInputChange}
          required
        />

        <InputForm
          type="tel"
          name="number"
          value={number}
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={handleInputChange}
          required
        />
      </FormWrapper>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

PhonebookForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  addContact: PropTypes.func,
};

export { PhonebookForm };

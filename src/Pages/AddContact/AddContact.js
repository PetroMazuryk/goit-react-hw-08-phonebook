import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import { Div, Text } from './AddContact.styled';
import { Section } from 'components/Section/Section';

export function AddContacts() {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Div>
      <Section title="Add new contacts">
        <ContactForm />
      </Section>

      {contacts.length > 0 ? (
        <>
          <Section title="Filter Contact">
            <Filter />
          </Section>
          <Section title="Contact List">
            <ContactList />
          </Section>
        </>
      ) : (
        <Text>There are no saved contacts!</Text>
      )}
    </Div>
  );
}

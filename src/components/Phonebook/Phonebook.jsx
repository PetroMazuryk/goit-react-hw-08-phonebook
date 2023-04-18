import React from 'react';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { List, Item, Text, Button } from './Phonebook.styled';
import { Section } from 'components/Section/Section';

import { HomeTitleContacts } from 'components/HomeTitle/HomeTitleContacts';

export const Phonebook = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactsList = filterContacts(contacts, filter);
  return (
    <>
      {contactsList.length ? (
        <Section title="Contact List">
          <List>
            {contactsList.map(({ id, name, number }) => {
              return (
                <Item key={id}>
                  <Text>{name}:</Text>
                  <p>{number}</p>
                  <Button
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    <RiDeleteBin5Fill />
                  </Button>
                </Item>
              );
            })}
          </List>
        </Section>
      ) : (
        <HomeTitleContacts />
      )}
    </>
  );
};

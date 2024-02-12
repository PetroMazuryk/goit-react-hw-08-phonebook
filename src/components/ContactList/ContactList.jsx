import React from 'react';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { RiDeleteBin5Fill } from 'react-icons/ri';

import { List, Item, Text, Button } from './ContactsList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contactsList = filterContacts(contacts, filter);

  return (
    <List>
      <TransitionGroup>
        {contactsList.map(({ id, name, number }) => {
          return (
            <CSSTransition key={id} timeout={500} classNames="contact">
              <Item>
                <Text>{name}:</Text>
                <p>{number}</p>
                <Button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <RiDeleteBin5Fill />
                </Button>
              </Item>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </List>
  );
};

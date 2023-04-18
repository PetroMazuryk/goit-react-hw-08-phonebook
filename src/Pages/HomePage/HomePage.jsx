import React, { useEffect } from 'react';
import { Phonebook } from 'components/Phonebook/Phonebook';
import { Button, LinkBtn } from './HomePage.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { PAGE_NAME } from 'router/paths';
import authSelectors from 'redux/auth/auth-selectors';
import { HomeTitle } from 'components/HomeTitle/HomeTitle';
import { PhoneTitle } from 'components/PhoneTitle/PhoneTitle';
export const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) return;

    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <PhoneTitle />
      {isLoggedIn ? (
        <>
          <Phonebook />
          <LinkBtn to={PAGE_NAME.addContact}>
            <Button>Add contact</Button>
          </LinkBtn>
        </>
      ) : (
        <HomeTitle />
      )}
    </div>
  );
};

import { Div, LinkNav, Span } from './Header.styled';
import { PAGE_NAME } from 'router/paths';
import { UserMenu } from 'components/userMenu/UserMenu';

import { FcTabletAndroid } from 'react-icons/fc';
import { IconContext } from 'react-icons';

import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

export const HeaderPage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Div>
        <LinkNav to={PAGE_NAME.homepage}>Home</LinkNav>
        {isLoggedIn && (
          <LinkNav to={PAGE_NAME.addContact}>Add contacts</LinkNav>
        )}
      </Div>
      <Div>
        <IconContext.Provider value={{ size: '36px' }}>
          <FcTabletAndroid />
        </IconContext.Provider>
        <Span> Your favorite phone book</Span>
      </Div>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Div>
          <LinkNav to={PAGE_NAME.register}>Registration</LinkNav>
          <LinkNav to={PAGE_NAME.login}>Login</LinkNav>
        </Div>
      )}
    </>
  );
};

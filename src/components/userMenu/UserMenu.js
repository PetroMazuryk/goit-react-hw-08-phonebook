import { Div, LogoImg, Text, Button } from './userMenu.styled';
import logo from '../../image/Avatar-2.webp';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <Div>
      <LogoImg src={logo} alt="Logo" />
      <Text>Welcome, {name}!</Text>
      <Button onClick={() => dispatch(authOperations.logOut())}>Log out</Button>
    </Div>
  );
};

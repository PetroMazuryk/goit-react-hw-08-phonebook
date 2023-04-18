import { Div, Title, Link } from './HomeTitle.styled';

import { PAGE_NAME } from 'router/paths';

export const HomeTitle = () => {
  return (
    <Div>
      <Title>
        Please <Link to={PAGE_NAME.login}>log in</Link> or{' '}
        <Link to={PAGE_NAME.register}>register</Link> to view and save your own
        contacts!
      </Title>
    </Div>
  );
};

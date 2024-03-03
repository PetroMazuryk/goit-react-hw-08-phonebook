import { PAGE_NAME } from '../../router/paths';
import { ImArrowLeft } from 'react-icons/im';
import { Arrow, LinkBack, Message } from './Error.styled';

export const ErrorPage = () => {
  return (
    <>
      <Message>
        Woops! Sorry, but this page does not exist. Go to the main page!
      </Message>

      <LinkBack to={PAGE_NAME.homepage}>
        <Arrow>
          <ImArrowLeft />
          Go back
        </Arrow>
      </LinkBack>
    </>
  );
};

export default ErrorPage;

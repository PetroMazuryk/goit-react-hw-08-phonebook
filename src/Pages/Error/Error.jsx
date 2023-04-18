import { Link } from 'react-router-dom';
import { PAGE_NAME } from '../../router/paths';

export const ErrorPage = () => {

  return (
    <div>
      <div>404 page not found</div>
      <Link to={PAGE_NAME.homepage}>Go to homepage</Link>
    </div>
  );
};

export default ErrorPage;

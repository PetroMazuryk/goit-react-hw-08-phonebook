import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import authSelectors from "redux/auth/auth-selectors";
import { PAGE_NAME } from "router/paths";

export const RestrictedRoute = ({ component: Component,  }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  
  return isLoggedIn ? <Navigate to={PAGE_NAME.homepage} /> : <Component />;
};

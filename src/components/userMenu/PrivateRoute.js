import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authSelectors from "redux/auth/auth-selectors";
import { PAGE_NAME } from "router/paths";

export const PrivateRoute = ({ component: Component,}) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const Redirect = !isLoggedIn 

  return (Redirect ? <Navigate to={PAGE_NAME.login} /> : <Component />);
};
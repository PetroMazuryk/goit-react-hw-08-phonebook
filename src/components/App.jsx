
// import { useLocalStorage } from "../hooks/Hooks";
import React, { Suspense, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./Header/Header";
import { AddContacts } from "Pages/AddContact/AddContact";
import { ErrorPage } from 'Pages/Error/Error';
import { RegisterForm } from "Pages/Register/Register";
import { LoginForm } from "Pages/Login/Login";
import { PAGE_NAME } from "router/paths";

import { Container, Div, DivScreen } from "./App.styled";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/auth-operations";
import { PhoneBook } from "Pages/HomePage/HomePage";
import {PrivateRoute} from "./userMenu/PrivateRoute";
import { RestrictedRoute } from "./userMenu/RestrictedRoute";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <Div>
      <Container >
      <Header />
      <DivScreen >
      <Suspense fallback={<p>...loading</p>}>
      <Routes >
        <Route exact path={PAGE_NAME.homepage} element={<PhoneBook />} />
        <Route path={PAGE_NAME.addContact} element={<PrivateRoute component={AddContacts} />} />
        <Route path={PAGE_NAME.register} element={<RestrictedRoute component={RegisterForm} />} />
        <Route path={PAGE_NAME.login} element={<RestrictedRoute component={LoginForm} />}  />
        <Route path={PAGE_NAME.error} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to={PAGE_NAME.error} replace />} />
      </Routes>
      </Suspense>
      </DivScreen>
      </Container >
    </Div>
  );
};

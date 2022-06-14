import React, { lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ROUTES } from './configs/routes';
import ProtectedRoute from './modules/common/components/ProtectedRoute';

const HomePage = lazy(() => import('./modules/home/pages/HomePage'));
const ContactPage = lazy(() => import('./modules/home/pages/ContactPage'));
const LoginPage = lazy(() => import('./modules/auth/login1/pages/LoginPage'));
const LoginPage1 = lazy(() => import('./modules/auth/login2/page/LoginPage1'))
const onSignUp = lazy(() => import('./modules/auth/SignUp/pages/UpPage'))
interface Props { }

export const Routes = (props: Props) => {
  const location = useLocation();

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <Switch location={location}>
        <Route path={ROUTES.login} component={LoginPage} />
        <ProtectedRoute path={ROUTES.home} component={HomePage} />
        <Route path={ROUTES.contact} component={ContactPage} />
        <Route path="/" component={LoginPage} exact />
        <Route path={ROUTES.signUp} component={onSignUp} exact />
      </Switch>
    </Suspense>
  );
};

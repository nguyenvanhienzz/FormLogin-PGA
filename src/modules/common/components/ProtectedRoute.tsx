import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { ROUTES } from '../../../configs/routes';

interface Props extends RouteProps {}

const ProtectedRoute = (props: Props) => {
  const { ...rest } = props;
  const auth = false;

  if (auth) {
    return <Route {...rest} />;
  }

  return (
    <Redirect
      to={{
        pathname: ROUTES.login,
        state: { from: location },
      }}
    />
  );
};

export default ProtectedRoute;

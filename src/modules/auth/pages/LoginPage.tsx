import React from 'react';
import LoginForm from '../components/LoginForm';

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <div
      className="container"
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginPage;

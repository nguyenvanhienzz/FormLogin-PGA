import React from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../../../logo-420-x-108.png';

interface Props {}

const LoginPage = (props: Props) => {
  return (
    <div
      className="container"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <img src={logo} alt="" style={{ maxWidth: '250px', margin: '32px' }} />

      <LoginForm onLogin={(values) => console.log(values)} loading={false} />
    </div>
  );
};

export default LoginPage;

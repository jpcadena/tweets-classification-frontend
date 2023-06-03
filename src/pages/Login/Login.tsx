// src/pages/Login/Login.tsx
import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login: React.FC = () => {
  const handleLoginSuccess = () => {
    // Redirect to the home page or perform other actions after a successful login.
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default Login;

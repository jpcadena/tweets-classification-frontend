// src/pages/SignUp.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SignUpForm } from '../../components/SignUpForm/SignUpForm';
import { UserCreateResponse } from '../../client/models/UserCreateResponse';

const SignUp: React.FC = () => {
    const navigate = useNavigate();
  
    const handleSignUpSuccess = (user: UserCreateResponse) => {
      // Redirect to another page after successful sign-up, for example, the login page
      navigate('/login');
    };
  
    return (
      <div>
        <h1>Sign Up</h1>
        <SignUpForm onSignUpSuccess={handleSignUpSuccess} />
      </div>
    );
  };
  
  export default SignUp;
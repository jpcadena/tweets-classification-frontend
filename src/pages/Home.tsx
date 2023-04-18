// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Screen</h1>
      <div>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
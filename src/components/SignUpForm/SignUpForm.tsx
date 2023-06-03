// src/components/SignUpForm/SignUpForm.tsx
import React, { useState } from 'react';
import { UsersService } from '../../client/services/UsersService';
import { UserCreate } from '../../client/models/UserCreate';
import { UserCreateResponse } from '../../client/models/UserCreateResponse';
import { Gender } from '../../client/models/Gender';

interface SignUpFormProps {
  onSignUpSuccess: (user: UserCreateResponse) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUpSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState<Gender | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: UserCreate = {
      username,
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      gender,
    };

    try {
      const response = await UsersService.createUser(user);
      onSignUpSuccess(response);
    } catch (error) {
      // Handle the error, e.g., show a message to the user.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <select
        value={gender}
        onChange={e => setGender(e.target.value as Gender)}
      >
        <option value="">Select Gender</option>
        <option value={Gender.MALE}>Male</option>
        <option value={Gender.FEMALE}>Female</option>
        <option value={Gender.OTHER}>Other</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

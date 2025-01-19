

import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Import the CSS file

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5004/identity/register', {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        setSuccessMessage('Registration successful!');
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Registration failed!');
        console.log(error.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">
          Register
        </button>
      </form>
      {errorMessage && <p className="message error">{errorMessage}</p>}
      {successMessage && <p className="message success">{successMessage}</p>}
    </div>
  );
};

export default RegisterPage;


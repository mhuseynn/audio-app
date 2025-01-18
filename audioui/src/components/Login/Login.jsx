// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErrorMessage('');
//     setSuccessMessage('');

//     try {
//       const response = await axios.post('http://localhost:5123/identity/login', {
//         email,
//         password
//       });

//       if (response.status === 200) {
//         setSuccessMessage('Login successful!');
//         // Handle successful login, e.g., store token or redirect
//         console.log('Token:', response.data.token);
//       }
//     } catch (error) {
//       if (error.response) {
//         setErrorMessage(error.response.data.message || 'Login failed!');
//       } else {
//         setErrorMessage('An error occurred. Please try again later.');
//       }
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div style={{ marginBottom: '15px' }}>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px' }}
//           />
//         </div>
//         <div style={{ marginBottom: '15px' }}>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ width: '100%', padding: '8px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '4px' }}
//           />
//         </div>
//         <button
//           type="submit"
//           style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
//         >
//           Login
//         </button>
//       </form>
//       {errorMessage && <p style={{ color: 'red', marginTop: '15px' }}>{errorMessage}</p>}
//       {successMessage && <p style={{ color: 'green', marginTop: '15px' }}>{successMessage}</p>}
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:5233/identity/login', {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccessMessage('Login successful!');
        console.log('Token:', response.data.token);
        onLogin(); // Notify parent component of successful login
      }
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'Invalid credentials, please try again.');
      } else {
        setErrorMessage('Unable to connect. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '14px',
            }}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: '100%',
            backgroundColor: isLoading ? '#999' : '#4CAF50',
            color: '#fff',
            padding: '10px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
          }}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {errorMessage && (
        <p style={{ color: 'red', marginTop: '15px', fontWeight: 'bold', textAlign: 'center' }}>
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p style={{ color: 'green', marginTop: '15px', fontWeight: 'bold', textAlign: 'center' }}>
          {successMessage}
        </p>
      )}
      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Don't have an account?{' '}
        <a
          href="/register"
          style={{ color: '#4CAF50', textDecoration: 'none', fontWeight: 'bold' }}
        >
          Register here
        </a>
      </p>
    </div>
  );
};

export default LoginPage;

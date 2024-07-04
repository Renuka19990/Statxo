
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ setRole }) => {
//   const [error, setError] = useState('');

//   const handleLogin = async (role) => {
//     try {
//       const response = await axios.post('http://localhost:5000/login', { role });
//       setRole(response.data.role, response.data.token);
//       localStorage.setItem('token', response.data.token);
//     } catch (err) {
//       setError('Login failed');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="my-4">Login</h2>
//       <button className="btn btn-primary m-2" onClick={() => handleLogin('admin')}>Login as Admin</button>
//       <button className="btn btn-secondary m-2" onClick={() => handleLogin('user')}>Login as User</button>
//       {error && <div className="alert alert-danger mt-3">{error}</div>}
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setRole }) => {
  const [error, setError] = useState('');

  const handleLogin = async (role) => {
    try {
      const response = await axios.post('http://localhost:5000/login', { role });
      setRole(response.data.role, response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Login failed');
    }
  };

  return (
    <div className="container">
      <h2 className="my-4">Login</h2>
      <button className="btn btn-primary m-2" onClick={() => handleLogin('admin')}>Login as Admin</button>
      <button className="btn btn-secondary m-2" onClick={() => handleLogin('user')}>Login as User</button>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
};

export default Login;

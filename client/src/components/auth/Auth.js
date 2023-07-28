import React, { useState } from 'react';
import useAuthUsernameCookie  from './AuthService';

function Auth({ api }) {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const { setUsernameCookie } = useAuthUsernameCookie();

  const handleSubmit = async () => {
    try {
      const data = await api.registerUser(username);
      if (data) {
        setUsernameCookie(data.username);
        window.location.reload();
      } else {
        setError('An error occurred.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during registration.');
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };


  return (
    <div id='root' style={{ width: '100%', height: '90vh' }} className='container-fluid d-flex justify-content-center align-items-center'>
      <div className='container col-6 bg-success text-success p-5 rounded shadow'>
        <form className='d-flex flex-column  bg-success justify-content-center col-12 h-300 p-4 '>
          <h1 style={{ color: 'white' }}>Register</h1>
          <input
            type='text'
            name='username'
            placeholder='Username'
            className='rounded border-1 border-light' style={{ width: '100%', height: '50px' }} required
            onChange={handleChange}
          />
          <input style={{ color: 'white' }}
            type='submit'
            className='create'
            onClick={handleSubmit}
          />
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Auth;

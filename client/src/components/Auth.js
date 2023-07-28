//The old component


// import React, { useState } from 'react';
// import { useCookies } from 'react-cookie';

// function Auth() {
//   const [cookies, setCookie] = useCookies(['Username']);
//   const [error, setError] = useState(null);
//   const [username, setUsername] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setCookie('Username', data.username);
//         window.location.reload();
//       } else {
//         setError(data.error || 'An error occurred.');
//       }
//     } catch (err) {
//       console.error(err);
//       setError('An error occurred during registration.');
//     }
//   };

//   return (
//     <div style={{width:'100%',height:'90vh'}} className='container-fluid d-flex justify-content-center align-items-center'>
//       <div className='container col-6 bg-success text-success p-5 rounded shadow'>
//         <form className='d-flex flex-column  bg-success justify-content-center col-12 h-300 p-4 '>
//           <h1 style={{color:'white'}}>Register</h1>
//           <input 
//             type='text'
//             name='username'
//             placeholder='Username'
//             className='rounded border-1 border-light' style={{width:'100%',height:'50px'}} required
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input style={{color:'white'}}
//             type='submit'
//             className='create'
//             onClick={handleSubmit}
//           />
//           {error && <p>{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Auth;

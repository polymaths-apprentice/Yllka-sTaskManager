import React from 'react';

function DateInputField({ label, name, value, onChange, errorMessage }) {
  return (
    <>
      <label style={{ color: '#007200' }} htmlFor={name}>
        {label}
      </label>
      <input
        className='rounded border-1 border-light'
        style={{ width: '500px', height: '50px' }}
        type='date'
        id={name}
        value={value}
        name={name}
        alt={`Enter your ${name}`}
        onChange={onChange}
      />
      {errorMessage && <p className='py-3 px-4 rounded position-fixed' style={{ color: 'white', backgroundColor: 'red', bottom: '100px', left: '42%' }}>{errorMessage}</p>}
    </>
  );
}

export default DateInputField;

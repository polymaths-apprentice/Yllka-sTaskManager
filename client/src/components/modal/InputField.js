import React from 'react';

function InputField({ label, type, name, value, onChange, maxLength, placeholder }) {
  return (
    <>
      <label style={{ color: '#007200' }} htmlFor={name}>
        {label}
      </label>
      <input
        className='rounded border-1 border-light'
        style={{ width: '500px', height: '50px' }}
        required
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </>
  );
}

export default InputField;

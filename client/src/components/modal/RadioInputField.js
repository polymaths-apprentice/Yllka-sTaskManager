import React from 'react';

function RadioInputField({ label, name, value, checked, onChange }) {
  return (
    <label style={{ color: '#007200' }} className='p-3'>
      <input type='radio' name={name} value={value} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

export default RadioInputField;

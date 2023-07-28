import React, { useState } from 'react';
import ModalForm from './modal/ModalForm';
import useAuthUsernameCookie from './auth/AuthService';


const ListHeader = ({ listName }) => {
  const [showModal, setShowModal] = useState(false);

  const handleSignOut = () => {
    useAuthUsernameCookie.removeUsernameCookie();
    window.location.reload();
  };

  const handleAddNew = () => {
    setShowModal(true);
  };

  return (
    <div style={{ borderBottom: '1px solid #007007' }} className='container-fluid d-flex justify-content-center align-items-center mb-3'>
      <div className='col-9 d-flex justify-content-between text-success'>
        <h1 className='p-3'>{listName}'s Tasks</h1>
        <div className='col-6 d-flex align-items-center justify-content-end'>
          <button className='create btn btn-outline-success rounded rounded-pill border-success shadow-sm mx-1' onClick={handleAddNew}>Add New</button>
          <button className='signout btn btn-outline-success rounded rounded-pill border-success shadow-sm mx-1' onClick={handleSignOut}>Sign out</button>
        </div>
        {showModal && <ModalForm mode={'create'} setShowModal={setShowModal} />}
      </div>
    </div>
  );
};

export default ListHeader;

import React from 'react';

const DeletedTaskMessage = ({ onClose }) => {
  return (
    <div
      style={{ top: '0', left: '0', backgroundColor: 'darkgreen', opacity: 0.9 }}
      className="position-fixed w-100 vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="bg-light p-4 rounded shadow w-60">
        <h1 className="fs-5 mb-4 text-success">The task is deleted</h1>
        <button className="btn btn-success fs-6 mt-4" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default DeletedTaskMessage;

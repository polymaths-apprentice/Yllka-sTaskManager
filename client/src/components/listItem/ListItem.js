import React, { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import ModalForm from '../modal/ModalForm';
import DeletedTaskMessage from './DeletedTaskMessage.js';

function ListItem({ task, getData, deleteTask, updateTask }) {
  const [showModal, setShowModal] = useState(false);
  const [completed, setCompleted] = useState(task.completed);
  const [showDeletedTaskMessage, setShowDeletedTaskMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleAPIError = (response, action) => {
    setErrorMessage(`Error ${action}! Status ${response.status}`);
    setTimeout(() => {
      setErrorMessage('');
    }, 2000);
  };

  const handleDelete = async () => {
    try {
      const response = await deleteTask(task.task_id);
      if (response.ok) {
        setShowDeletedTaskMessage(true);
      } else {
        handleAPIError(response, 'deleting task');
      }
    } catch (err) {
      setErrorMessage('An error occurred while deleting the task.');
    }
  };

  const handleToggleCompletion = async () => {
    try {
      const updatedTask = { ...task, completed: !completed };
      const response = await updateTask(task.task_id, updatedTask);
      if (response.ok) {
        setCompleted(!completed);
      } else {
        handleAPIError(response, 'updating task');
      }
    } catch (err) {
      setErrorMessage('An error occurred while updating the task.');
    }
  };

  const dueDate = new Date(task.due_date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="container-fluid position-relative col-9 d-flex justify-content-between bg-success text-white p-4 mb-4 rounded shadow">
      <div className="info">
        <MdOutlineDoneOutline
          className={completed ? 'd-block mr-3' : 'd-none'}
          onClick={handleToggleCompletion}
        />
        <div className="container d-flex flex-column justify-content-center fc-antiquewhite">
          <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{task.task_name}</p>
          <p style={{ fontSize: '13px' }} className="my-1">
            Description: {task.description}
          </p>
          <p style={{ fontSize: '13px' }} className="my-1">
            Deadline: {dueDate}
          </p>
          <p style={{ fontSize: '13px' }} className="my-1">
            Category: {task.category}
          </p>
        </div>
      </div>

      <div className="buttonContainer">
        <button className="edit" onClick={() => setShowModal(true)}>
          <BiEditAlt />
        </button>
        <button className="delete" onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>

      {showModal && (
        <ModalForm
          mode="edit"
          setShowModal={setShowModal}
          task={task}
          updateTask={updateTask}
          handleAPIError={handleAPIError}
        />
      )}

      {showDeletedTaskMessage && (
        <DeletedTaskMessage
          onClose={() => {
            setShowDeletedTaskMessage(false);
            getData();
          }}
        />
      )}

      {errorMessage && (
        <p className="error-message py-3 px-4 rounded position-fixed" style={{ color: 'white', backgroundColor: 'red', bottom: '100px', left: '42%' }}>
          {errorMessage}
        </p>
      )}
    </div>
  );
}



export default ListItem;

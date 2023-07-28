//The old component

// import React, { useState } from 'react';
// import { BiEditAlt } from 'react-icons/bi';
// import { MdOutlineDoneOutline } from 'react-icons/md';
// import { AiFillDelete } from 'react-icons/ai';
// import Modal from './Modal';

// function ListItem({ task, getData }) {
//   const [showModal, setShowModal] = useState(false);
//   const [completed, setCompleted] = useState(task.completed);
//   const [showDeletedTaskMessage, setShowDeletedTaskMessage] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const deleteItem = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/tasks/${task.task_id}`, { method: 'DELETE' });
//       if (response.ok) {
//         setShowDeletedTaskMessage(true);
//       } else {
//         setErrorMessage(`Error deleting task! Status ${response.status}`);
//         setTimeout(() => {
//           setErrorMessage('')
//         }, 2000);
//       }
//     } catch (err) {
//       console.error(err);
//       setErrorMessage('An error occurred while deleting the task.');
//     }
//   };

//   const toggleCompletion = async () => {
//     try {
//       const updatedTask = { ...task, completed: !completed };
//       const response = await fetch(`http://localhost:5000/tasks/${task.task_id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedTask),
//       });
//       if (response.ok) {
//         setCompleted(!completed);
//       } else {
//         setErrorMessage(`Error updating task! Status ${response.status}`);
//         setTimeout(() => {
//           setErrorMessage('')
//         }, 2000);
          
//       }
//     } catch (err) {
//       console.error(err);
//       setErrorMessage('An error occurred while updating the task.');
//     }
//   };

//   const dueDate = new Date(task.due_date).toLocaleDateString(undefined, {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });

//   return (
//     <div className="container-fluid position-relative col-9 d-flex justify-content-between bg-success text-white p-4 mb-4 rounded shadow">
//       <div className="info">
//         <MdOutlineDoneOutline
//           className={completed ? 'd-block mr-3' : 'd-none'}
//           onClick={toggleCompletion}
//         />
//         <div className="container d-flex flex-column justify-content-center fc-antiquewhite">
//           <p style={{ fontWeight: 'bold', fontSize: '20px' }}>{task.task_name}</p>
//           <p style={{ fontSize: '13px' }} className="my-1">
//             Description: {task.description}
//           </p>
//           <p style={{ fontSize: '13px' }} className="my-1">
//             Deadline: {dueDate}
//           </p>
//           <p style={{ fontSize: '13px' }} className="my-1">
//             Category: {task.category}
//           </p>
//         </div>
//       </div>

//       <div className="buttonContainer ">
//         <button className="edit" onClick={() => setShowModal(true)}>
//           <BiEditAlt />
//         </button>
//         <button className="delete" onClick={deleteItem}>
//           <AiFillDelete />
//         </button>
//       </div>

//       {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task} />}

//       {showDeletedTaskMessage && (
//         <DeletedTaskMessage
//           onClose={() => {
//             setShowDeletedTaskMessage(false);
//             getData();
//           }}
//         />
//       )}

//       {errorMessage && <p className="error-message py-3 px-4 rounded position-fixed" style={{color:"white",backgroundColor:'red', bottom:'100px', left:'42%'}}>{errorMessage}</p>}
//     </div>
//   );
// }

// const DeletedTaskMessage = ({ onClose }) => {
//   return (
//     <div
//       style={{ top: '0', left: '0', backgroundColor: 'darkgreen', opacity: 0.9 }}
//       className="position-fixed w-100 vh-100 d-flex justify-content-center align-items-center"
//     >
//       <div className="bg-light p-4 rounded shadow w-60">
//         <h1 className="fs-5 mb-4 text-success">
//           The task is deleted
//         </h1>
//         <button className="btn btn-success fs-6 mt-4" onClick={onClose}>
//           OK
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ListItem;

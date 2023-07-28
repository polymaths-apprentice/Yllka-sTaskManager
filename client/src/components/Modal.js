//The old component

// import React, { useEffect, useState } from 'react';
// import { RxCross2 } from "react-icons/rx";
// import { useCookies } from 'react-cookie';

// function Modal({ mode, setShowModal, getData, task }) {
//   const [cookies] = useCookies(null);
//   const editMode = mode === 'edit';

//   const [data, setData] = useState({
//     task_name: editMode ? task.task_name : "",
//     due_date: editMode ? task.due_date : "",
//     category: editMode ? task.category : "",
//     description: editMode ? task.description : "",
//     username: editMode ? task.username : cookies.Username,
//     completed: editMode ? task.completed: false
//   });


//   const [categories, setCategories] = useState([]);
  
//   useEffect(() => {
//     fetch('http://localhost:5000/categories')
//       .then(response => response.json())
//       .then(data => setCategories(data))
//       .catch(error => console.error(error));
//   }, []);



//   const [errorMessage, setErrorMessage] = useState("");

//   const postData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/tasks', {
//         method: "POST",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       });
//       console.log(response);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const editData = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/tasks/${task.task_id}`, {
//         method: "PUT",
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       });
//       if (response.status === 200) {
//         setShowModal(false);
//         getData();
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'completed') {
//       setData((prevData) => ({
//         ...prevData,
//         completed: value === 'true',
//       }));
//     } else {
//       setData((prevData) => ({
//         ...prevData,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     if (new Date(data.due_date) <= new Date()) {
//       setErrorMessage("Due date cannot be in the past");
//       setTimeout(() => {
//         setErrorMessage('')
//       }, 2000);
//       e.preventDefault();
//       return;
//     }
    

//     if (editMode) {
//       editData();
//     } else {
//       postData();
//     }
//   };

//   return (
//     <div className='container-fluid position-fixed top-0 left-0 d-flex justify-content-center align-items-center bg-success ' style={{zIndex:'2',opacity:'0.9', width: '100vw', height: '100vh',position:'absolute',top:'0',left:'0' }}>
//       <div className='container p-4  rounded w-700 h-700 d-flex flex-column bg-light'>
//         <div className='container d-flex justify-content-between my-3'>
//           <h3 style={{color:"#007200"}}>{mode} your task</h3>
//           <button className='bg-transparent' style={{color:'#007200',border:'none', fontSize:'30px'}} onClick={() => setShowModal(false)}><RxCross2 /></button>
//         </div>
//         <form className='container-fluid col-10 d-flex flex-column align-items-start justify-content-center' onSubmit={handleSubmit}>
//           <label style={{color:"#007200"}} htmlFor="name">Enter your task name</label>
//           <input className='rounded border-1 border-light' style={{width:'500px',height:'50px'}} required maxLength={30} placeholder='Enter the name of the task' name='task_name' id='name' value={data.task_name} onChange={handleChange}></input>
//           <label style={{color:"#007200"}} htmlFor="description">Description</label>
//           <input className='rounded border-1 border-light' style={{width:'500px',height:'50px'}} required placeholder='Description' name='description' id='name' value={data.description} onChange={handleChange}></input>
//           <label style={{color:"#007200"}} htmlFor="date">Enter the date when it should be finished</label>
//           {errorMessage && <p className="py-3 px-4 rounded position-fixed" style={{color:"white",backgroundColor:'red', bottom:'100px', left:'42%'}}>{errorMessage}</p>}
//           <input className='rounded border-1 border-light' style={{width:'500px',height:'50px'}} type='date' id='date' value={data.due_date} name='due_date' alt='Enter your due date' onChange={handleChange} />
//           <label style={{color:"#007200"}} htmlFor="category">Select the category</label>
//           <select name="category" id="category" value={data.category} className='rounded border-1 border' style={{width:'500px',height:'50px'}} onChange={handleChange}>
//             <option defaultValue={true} value="">Select a category</option>
//             {categories.map(category => (
//               <option key={category} value={category}>{category}</option>
//             ))}

//           </select>
//           {editMode &&  <div>     <label style={{color:"#007200"}} className='p-3'>
//         <input 
//           type="radio"
//           name="completed"
//           value="true"
//           checked={data.completed === true}
//           onChange={handleChange}
//         />
//         Completed
//       </label>
//       <label style={{color:"#007200"}} className='p-3'>
//         <input
//           type="radio"
//           name="completed"
//           value="false"
//           checked={data.completed === false}
//           onChange={handleChange}
//         />
//         Not Completed
//       </label>
//       </div>
          
//           }
//            <input type='submit' className={mode}></input>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Modal;

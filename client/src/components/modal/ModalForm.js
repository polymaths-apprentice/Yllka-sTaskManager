// components/ModalForm.js
import React, { useState, useEffect } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useCookies } from 'react-cookie';
import { fetchCategories, postData, editData } from './ModalApiServices';
import InputField from './InputField';
import DateInputField from './DateInputField';
import RadioInputField from './RadioInputField';

function ModalForm({ mode, task, onSubmit, setShowModal }) {
  const [cookies] = useCookies(null);
  const editMode = mode === 'edit';

  const initialFormData = {
    task_name: editMode ? task.task_name : '',
    due_date: editMode ? task.due_date : '',
    category: editMode ? task.category : '',
    description: editMode ? task.description : '',
    username: editMode ? task.username : cookies.Username,
    completed: editMode ? task.completed : false,
  };

  const [data, setData] = useState(initialFormData);
  const [categories, setCategories] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [cacheVersion, setCacheVersion] = useState(1);
  
  useEffect(() => {
    const cachedData = localStorage.getItem('cachedCategories');
    const cachedVersion = localStorage.getItem('cachedCategoriesVersion');
    if (cachedData && cachedVersion) {
        const parsedVersion = parseInt(cachedVersion, 10);
        if (!isNaN(parsedVersion) && parsedVersion === cacheVersion) {
          setCategories(JSON.parse(cachedData));
        } else {
          fetchData();
        }
      } else {
        fetchData();
      }
    }, [cacheVersion]);


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/categories');
      const data = await response.json();
      const categoriesArray = data.rows.map((row) => row.category);
      setCategories(categoriesArray);
      localStorage.setItem('cachedCategories', JSON.stringify(categoriesArray));
      setCacheVersion((prevVersion) => prevVersion + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'completed') {
      setData((prevData) => ({
        ...prevData,
        completed: value === 'true',
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    if (new Date(data.due_date) <= new Date()) {
      setErrorMessage('Due date cannot be in the past');
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      if (editMode) {
        await editData(task.task_id, data);
      } else {
        await postData(data);
      }
      onSubmit(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className='container-fluid position-fixed top-0 left-0 d-flex justify-content-center align-items-center bg-success' style={{ zIndex: '2', opacity: '0.9', width: '100vw', height: '100vh', position: 'absolute', top: '0', left: '0' }}>
      <div className='container p-4 rounded w-700 h-700 d-flex flex-column bg-light'>
        <div className='container d-flex justify-content-between my-3'>
          <h3 style={{ color: '#007200' }}>{mode} your task</h3>
          <button className='bg-transparent' style={{ color: '#007200', border: 'none', fontSize: '30px' }} onClick={() => setShowModal(false)}>
            <RxCross2 />
          </button>
        </div>
        <form className='container-fluid col-10 d-flex flex-column align-items-start justify-content-center' onSubmit={handleSubmit}>
          <InputField label='Enter your task name' type='text' name='task_name' value={data.task_name} onChange={handleChange} maxLength={30} placeholder='Enter the name of the task' />
          <InputField label='Description' type='text' name='description' value={data.description} onChange={handleChange} placeholder='Description' />
          <DateInputField label='Enter the date when it should be finished' name='due_date' value={data.due_date} onChange={handleChange} errorMessage={errorMessage} />
          <label style={{ color: '#007200' }} htmlFor='category'>
            Select the category
          </label>
          <select name='category' id='category' value={data.category} className='rounded border-1 border' style={{ width: '500px', height: '50px' }} onChange={handleChange}>
            <option defaultValue={true} value=''>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {editMode && (
            <div>
              <RadioInputField label='Completed' name='completed' value='true' checked={data.completed === true} onChange={handleChange} />
              <RadioInputField label='Not Completed' name='completed' value='false' checked={data.completed === false} onChange={handleChange} />
            </div>
          )}
          <input type='submit' className={mode} />
        </form>
      </div>
    </div>
  );
}

export default ModalForm;

import React, { useEffect, useState } from 'react';
import './App.css';
import ListHeader from './components/ListHeader';
import ListItem from './components/listItem/ListItem';
import Auth from './components/auth/Auth';
import {useCookies} from 'react-cookie';
import { registerUser } from './components/auth/registerUserApi';
import { deleteTaskApi } from './components/listItem/DeleteTaskApi';
import { updateTaskApi } from './components/listItem/UpdateTaskApi';
import { fetchTasksByUser } from './components/FetchTasksByUser';


function App() {
  const[cookies] = useCookies(null)
  const username = cookies.Username
  const[tasks,setTasks] = useState(null)

  const getData = async () => {
    try {
      const tasksData = await fetchTasksByUser(username);
      setTasks(tasksData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(()=> {
  if(username){
    getData()
  }}
  ,[username])

  const sortedByDate = tasks?.sort((a,b)=>new Date(a.due_date)-new Date(b.due_date))

  return (
    <div style={{position:'relative'}} className="container-fluid position-relative flex-column justify-content-center align-items-center bg-antiquewhite shadow rounded p-4 vh-100" >
     
     {!username && <Auth api={{ registerUser }} />}
{username && (
  <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
    <ListHeader listName={username} getData={getData} />
    {sortedByDate && sortedByDate.length === 0 ? (
      <p className='text-success pt-4' data-testid="test1" style={{fontSize:'40px',color:"#007200"}}>You are free for the next upcoming days!&#127881;</p>
    ) : (
      sortedByDate?.map((task) => (
        <ListItem
          key={task.task_id}
          task={task}
          getData={getData}
          deleteTask={deleteTaskApi} 
          updateTask={updateTaskApi}
        />
      ))
    )}
  </div>
)}

      </div>
  );
}


export default App;

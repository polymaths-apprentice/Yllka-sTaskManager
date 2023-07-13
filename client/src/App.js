import React, { useEffect, useState } from 'react';
import './App.css';
import ListHeader from './components/ListHeader';
import ListItem from './components/ListItem';
import Auth from './components/Auth';
import {useCookies} from 'react-cookie';


function App() {
  const[cookies, setCookie,removeCookies] = useCookies(null)
  const username = cookies.Username
  const[tasks,setTasks] = useState(null)

  const getData = async()=>{
    try{
      const response = await fetch(`http://localhost:5000/tasks/${username}`)
      const json = await response.json()
      setTasks(json)
    }catch(err){
      console.error(err);
    }
  }

  useEffect(()=> {
  if(username){
    getData()
  }}
  ,[])

  const sortedByDate = tasks?.sort((a,b)=>new Date(a.due_date)-new Date(b.due_date))

  return (
    <div style={{position:'relative'}} className="container-fluid position-relative flex-column justify-content-center align-items-center bg-antiquewhite shadow rounded p-4 vh-100" >
     
     {!username && <Auth />}
{username && (
  <div className='container-fluid d-flex flex-column align-items-center justify-content-center'>
    <ListHeader listName={username} getData={getData} />
    {sortedByDate && sortedByDate.length === 0 ? (
      <p className='text-success pt-4' style={{fontSize:'40px',color:"#007200"}}>You are free for the next upcoming days!&#127881;</p>
    ) : (
      sortedByDate?.map((task) => (
        <ListItem key={task.task_id} task={task} getData={getData} />
      ))
    )}
  </div>
)}

      </div>
  );
}


export default App;

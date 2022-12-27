import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

const Home = () => {

    const[tasks, setTasks] = useState()

    const url = "http://localhost:8000/tasks/all/"

    const getTask = async() =>{
        const {data} = await axios(url)
        setTasks(data)
    }

    useEffect(()=>{
        getTask()
    },[])

    console.log(tasks);

  return (
    <div className='mt-4 d-flex justify-content-center flex-column'>
        <AddTask getTask={getTask} />
        <TaskList tasks={tasks} getTask={getTask}/>
    </div>
  )
}

export default Home
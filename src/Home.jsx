import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import  Button  from 'react-bootstrap/Button'

const Home = () => {

    const [isOpen,setIsOpen]=useState(false)
    const [text,setText]=useState("Show Task Bar")
    const[tasks, setTasks] = useState([])

    const url = "https://svtrhozcan.pythonanywhere.com/tasks/all/"

    const toggle=()=>{
      setIsOpen(!isOpen);
      const buttonText=isOpen ? "Show Task Bar" : "Hide Task Bar"
      setText(buttonText);
    }
    //CRUD READ
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
        <Button 
      onClick={()=>{toggle()}}
      variant="danger">{text}</Button>
       {isOpen && <AddTask getTask={getTask} />} 
        <TaskList tasks={tasks} getTask={getTask}/>
    </div>
  )
}

export default Home
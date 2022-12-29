import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

const AddTask = ({getTask}) => {
  const initialState = {
    task: "",
    priority: "",
    date: "",
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(formData);
    setFormData(initialState);
  };


  const addNewTask = async(newTask) =>{
    const url = "https://svtrhozcan.pythonanywhere.com/tasks/all/";
    try {
        await axios.post(url, newTask)
    } catch (error) {
        console.log(error);
    }
    getTask();
  }
  
  return (
    <div className="d-flex flex-column">
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text"
         placeholder="Enter task" 
         name="task"
         value={formData.task}
         onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text"
         placeholder="Enter priority" 
         name="priority"
         value={formData.priority}
         onChange={handleChange}/>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" 
         name="date"
         value={formData.date}
        onChange={handleChange}/>
      </Form.Group>
    <div className="text-center">
      <Button variant="primary w-50 " type="submit">
        SAVE
      </Button>
      </div>
    </Form>
    </div>
  );
};

export default AddTask;

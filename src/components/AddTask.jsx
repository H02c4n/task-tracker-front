import React, { useState } from "react";
import Form from "react-bootstrap/Form";
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
    const url = "http://localhost:8000/tasks/all/";
    try {
        await axios.post(url, newTask)
    } catch (error) {
        console.log(error);
    }
    getTask();
  }
  
  return (
    <div className="d-flex flex-column">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Task
              </InputGroup.Text>
              <Form.Control
                name="task"
                value={formData.task}
                onChange={handleChange}
                placeholder="Type something to do"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Priority
              </InputGroup.Text>
              <Form.Control
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                placeholder="high, Medium or low"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>

          <div className="col-md-6">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Date
              </InputGroup.Text>
              <Form.Control
                name="date"
                value={formData.date}
                onChange={handleChange}
                type="date"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
        </div>
        <div className="d-grid gap-2 mb-2">
  <button className="btn btn-outline-secondary" type="submit">Button</button>
</div>
      </form>
    </div>
  );
};

export default AddTask;

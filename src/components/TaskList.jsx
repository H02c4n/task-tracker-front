import React from "react";
import axios from "axios";
import {RiDeleteBin2Fill} from "react-icons/ri"
import ListGroup from "react-bootstrap/ListGroup";

const TaskList = ({ tasks, getTask }) => {


  const deleteTask = async (id) => {
    const url = "https://svtrhozcan.pythonanywhere.com/tasks";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      <ListGroup>
        {tasks?.map((item) => {
          const { task, id, priority, completed } = item;
          let priorityColor = "";
          if (priority.toLowerCase() === "high") {
            priorityColor = "danger";
          } else if (priority.toLowerCase() === "medium") {
            priorityColor = "info";
          } else if (priority.toLowerCase() === "low") {
            priorityColor = "success";
          }
          return (
            <ListGroup.Item key={id} className="mt-2">
              <div className="d-flex justify-content-between">
                {task}
                <span>
                  <span
                    className={`float-right badge bg-${priorityColor} me-2`}
                  >
                    {priority}
                  </span>
                  <RiDeleteBin2Fill
              onClick={()=>deleteTask(id)}
              style={{
                cursor:"pointer",
                marginRight:"5px",
                fontSize:"2rem"
              }}/>
                </span>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
    
  );
};

export default TaskList;

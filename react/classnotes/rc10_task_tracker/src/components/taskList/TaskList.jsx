import axios from "axios";
import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://63518210dfe45bbd55c21bb8.mockapi.io/api/tasks";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {}
    getTask();
  };

  return (
    <div>
      {task.map((item) => {
        const { id, task, date } = item;
        return (
          <div
            className="mt-2 d-flex justify-content-between bg-secondary rounded-3 p-2"
            key={id}>
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
            </div>
            <div>
              <RiDeleteBack2Fill
                onClick={() => {
                  deleteTask(id);
                }}
                style={{
                  cursor: "pointer",
                  boxShadow: "2px 2px 2px pink",
                  fontSize: "2rem",
                  marginRight: "20px",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;

import axios from "axios";
import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";

const TaskList = ({ task, getTask }) => {
  const deleteTask = async (id) => {
    const url = "https://63518210dfe45bbd55c21bb8.mockapi.io/api/tasks";
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {}
  };

  useEffect(() => {
    getTask();
  }, []);

  const editTask = async ({ task, date, id }) => {
    // const { id, title, description } = item;
    const url = "https://63518210dfe45bbd55c21bb8.mockapi.io/api/tasks";
    try {
      await axios.put(`${url}/${id}`, { task, date });
    } catch (error) {
      console.log(error);
    }
    getTask();
  };

  return (
    <div>
      {task?.map((item) => {
        const { id, task, date, time } = item;
        return (
          <div
            key={id}
            className="d-flex justify-content-between bg-light rounded-2 p-2 mt-2 ">
            <div>
              <h4>{task}</h4>
              <p>{date}</p>
              <p>{time}</p>
            </div>
            <Button
              onClick={() => editTask({ task, date })}
              data-bs-toggle="modal"
              data-bs-target="#edit-modal">
              Edit
            </Button>
            <Button onClick={() => deleteTask(id)}>delete</Button>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;

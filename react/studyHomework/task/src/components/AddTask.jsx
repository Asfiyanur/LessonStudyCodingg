import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddTask = ({ getTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { task, date };
    addNewTask(newTask);
  };

  const addNewTask = async (newTask) => {
    const url = "https://63518210dfe45bbd55c21bb8.mockapi.io/api/tasks";
    try {
      await axios.post(url, newTask);
    } catch (error) {}
    getTask();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="task"
            placeholder="Enter task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>date</Form.Label>
          <Form.Control
            type="datetime-local"
            placeholder="Enter date"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;

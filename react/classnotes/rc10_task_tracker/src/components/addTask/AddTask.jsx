import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

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
  };

  getTask();

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTask">
          <Form.Label>Task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Task"
            onChange={(e) => setTask(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="date"
            onChange={(e) => setDate(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary btn-lg w-100 " type="submit">
          SAVE
        </Button>
      </Form>
    </div>
  );
};

export default AddTask;

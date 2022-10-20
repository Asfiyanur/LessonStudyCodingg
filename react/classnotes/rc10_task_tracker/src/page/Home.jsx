import React, { useState, useEffect } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);

  const url = "https://63518210dfe45bbd55c21bb8.mockapi.io/api/tasks";

  const toggle = (e) => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="">
      <Button
        variant="danger"
        size="lg"
        onClick={(e) => {
          toggle();
        }}>
        {text}
      </Button>

      {isOpen && <AddTask />}

      <TaskList task={task} />
    </div>
  );
};

export default Home;

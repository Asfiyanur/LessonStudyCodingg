import axios from "axios";
import React from "react";
import AddTask from "../components/AddTask";
// import TaskList from "../components/TaskList";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import TaskSvg from "../taskSvg/TaskSvg";
import TaskList from "../components/TaskList";

const Home = () => {
  const [task, setTask] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Tasks");

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Tasks" : "Hide Tasks";
    setText(buttonText);
  };

  //! READ
  const getTask = async () => {
    const url = "https://63518210dfe45bbd55c21bb8.mockapi.io/api/tasks";

    try {
      const { data } = await axios(url);
      setTask(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="text-center">
      <div>
        <TaskSvg />
        <h1>Task Tracker</h1>
      </div>
      <Button
        onClick={() => {
          toggle();
        }}
        variant="danger">
        {text}
      </Button>

      {isOpen && <AddTask />}
      <TaskList task={task} getTask={getTask} />
    </div>
  );
};
export default Home;

import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

const TaskList = ({ task }) => {
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

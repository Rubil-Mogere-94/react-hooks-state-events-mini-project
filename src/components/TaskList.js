// src/components/TaskList.js
import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.id}
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
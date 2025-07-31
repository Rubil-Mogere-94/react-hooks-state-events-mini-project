// src/components/App.js
import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleTasks = selectedCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(cat => cat !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={visibleTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;

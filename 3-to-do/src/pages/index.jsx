import { useState } from "react";
import { Filter, Summary, Form, TasksContainer } from "../components";

const Home = () => {
  const [taskList, setTaskList] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const clearCompletedTasks = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all completed tasks?");

    if (!confirmClear) return;

    const remainingTasks = taskList.filter((task) => !task.isCompleted);
    setTaskList(remainingTasks);
  };

  const filteredTasks = taskList.filter((task) => {
    if (currentFilter === "active") return !task.isCompleted;
    if (currentFilter === "completed") return task.isCompleted;

    return true;
  });

  return (
    <div className="container">
      <div className="inner-container">
        <h1 className="title">To-Do List</h1>

        <Form updateTaskList={setTaskList} taskListValue={taskList} />

        <Filter activeFilterValue={currentFilter} updateCurrentFilter={setCurrentFilter} />

        <TasksContainer filteredTasksValue={filteredTasks} taskListValue={taskList} updateTaskList={setTaskList} />

        {Boolean(taskList.length) && <Summary handleClearCompletedTasks={clearCompletedTasks} taskListValue={taskList} />}

        <div className="footer">
          <span>Powered by</span>
          <span className="pinecone">Pinecone academy</span>
        </div>
      </div>
    </div>
  );
};

export default Home;

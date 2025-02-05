import { TaskList } from "./TaskList";
import { NoTasksToDisplay } from "./NoTasksToDisplay";

export const TasksContainer = ({ filteredTasksValue, taskListValue, updateTaskList }) => {
  const toggleTaskCompletionStatus = (taskId) => {
    const updatedTasks = taskListValue.map((task) => (task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task));
    updateTaskList(updatedTasks);
  };

  const removeTaskById = (taskId) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this task?");
    if (!userConfirmed) return;

    const remainingTasks = taskListValue.filter((task) => task.id !== taskId);
    updateTaskList(remainingTasks);
  };

  if (filteredTasksValue.length) {
    return <TaskList taskListValue={filteredTasksValue} onToggleTaskStatus={toggleTaskCompletionStatus} onRemoveTask={removeTaskById} />;
  }

  return <NoTasksToDisplay />;
};

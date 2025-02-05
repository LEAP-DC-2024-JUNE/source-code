import { TaskRow } from "./TaskRow";

export const TaskList = ({ taskListValue, onToggleTaskStatus, onRemoveTask }) => {
  return (
    <div>
      {taskListValue.map((task, index) => (
        <TaskRow key={index} onRemoveTask={onRemoveTask} onToggleTaskStatus={onToggleTaskStatus} task={task} />
      ))}
    </div>
  );
};

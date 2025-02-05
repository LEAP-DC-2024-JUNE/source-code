import styles from "./styles/taskRow.module.css";

export const TaskRow = ({ onToggleTaskStatus, onRemoveTask, task }) => {
  const { id, isCompleted, text } = task;

  const handleTaskRemoval = () => onRemoveTask(id);
  const handleTaskStatusToggle = () => onToggleTaskStatus(id);

  return (
    <div className={styles.taskRow}>
      <input type="checkbox" checked={isCompleted} onChange={handleTaskStatusToggle} className={styles.taskCheck} />

      <p className={isCompleted ? styles.uncompletedTaskLable : styles.completedTaskLable}>{text}</p>

      <button onClick={handleTaskRemoval} className={styles.taskDeleteButton}>
        Delete
      </button>
    </div>
  );
};

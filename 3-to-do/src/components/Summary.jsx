import styles from "./styles/summary.module.css";

export const Summary = ({ taskListValue, handleClearCompletedTasks }) => {
  const totalTaskCount = taskListValue.length;
  const completedTaskCount = taskListValue.filter((task) => task.isCompleted).length;

  return (
    <div className={styles.summary}>
      <p className={styles.tasks}>
        {completedTaskCount} of {totalTaskCount} tasks completed
      </p>

      <button onClick={handleClearCompletedTasks} className={styles.clearCompletedButton}>
        Clear Completed
      </button>
    </div>
  );
};

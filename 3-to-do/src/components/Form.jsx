import { useState } from "react";
import styles from "./styles/form.module.css";

export const Form = ({ updateTaskList, taskListValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTaskAddition = (event) => {
    event.preventDefault();

    if (!inputValue) {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    updateTaskList([newTask, ...taskListValue]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleTaskAddition} className={styles.form}>
      <input type="text" maxLength={100} value={inputValue} onChange={handleInputChange} placeholder="Add a new task..." className={styles.formInput} />

      <button type="submit" className={styles.formButton}>
        Add
      </button>
    </form>
  );
};

// TodoList.jsx
import React, { useState } from 'react';
import styles from './TodoList.module.css'; // Import component-specific CSS module

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.todoList}>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a task..."
        />
        <button type="submit">Add Task</button>
      </form>
      {tasks.length === 0 ? (
        <p>No tasks, add a task</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button className={styles.deleteBtn} onClick={() => handleDeleteTask(index)}>
                &#x2715;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

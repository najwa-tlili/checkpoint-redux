import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask({ id: Date.now(), description: task, isDone: false });
      setTask('');
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={handleTaskChange} placeholder="Enter a new task" />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
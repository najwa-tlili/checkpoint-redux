import React, { useState } from 'react';
import EditTask from '../EditTask/EditTask';

const Task = ({ task, toggleTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleTask = () => {
    toggleTask(task.id);
  };

  const handleEditTask = (updatedTask) => {
    editTask(task.id, updatedTask);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <EditTask task={task} editTask={handleEditTask} cancelEdit={handleCancelEdit} />
      ) : (
        <div>
          <input type="checkbox" checked={task.isDone} onChange={handleToggleTask} />
          <span>{task.description}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
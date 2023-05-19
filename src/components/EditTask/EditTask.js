import React, { useState } from 'react';

const EditTask = ({ task, editTask, cancelEdit }) => {
  const [editedTask, setEditedTask] = useState(task.description);

  const handleEditedTaskChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleSaveTask = () => {
    if (editedTask.trim() !== '') {
      editTask({ description: editedTask });
    }
  };

  return (
    <div>
      <input type="text" value={editedTask} onChange={handleEditedTaskChange} />
      <button onClick={handleSaveTask}>Save</button>
      <button onClick={cancelEdit}>Cancel</button>
    </div>
  );
};

export default EditTask;
import Filter from "../Filter/Filter";
import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import React, { useState } from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');
  
    const handleAddTask = newTask => {
      setTasks([...tasks, newTask]);
    };
  
    const handleToggleTask = taskId =>  {
      setTasks(tasks.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            isDone: !task.isDone
          };
        }
        return task;
      }));
    };
  
    const handleFilterChange = newFilter => {
      setFilter(newFilter);
    };
  
    let filteredTasks = tasks;
    if (filter === 'done') {
      filteredTasks = tasks.filter(task => task.isDone);
    } else if (filter === 'notDone') {
      filteredTasks = tasks.filter(task => !task.isDone);
    };
  
    return (
      <div>
        <AddTask onAdd={handleAddTask} />
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        {filteredTasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onToggle={handleToggleTask}
          />
        ))}
      </div>
    );
 };

export default TaskList; 
import React from 'react'
import { useState, useEffect } from 'react';
import './AppPromo.css'

const AppPromo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskText !== '') {
      const newTask = { text: taskText, completed: false };
      setTasks([...tasks, newTask]);
      setTaskText('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const activeTasks = tasks.filter(task => !task.completed);
    setTasks(activeTasks);
  };

  return (
    <div className='app-promo' id='app-promo'>
      <div className="wrap">
        <h2>Task List</h2>
        <form action="#app-promo" className="formInput">
          <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="Enter task" />
          <button className='addBtn' onClick={addTask}>Add Task</button>
          <button className='clearBtn' onClick={clearCompletedTasks}>Clear Completed</button>
        </form>

        <ul id="input-result">
          {tasks.map((task, index) => (
            <li className='task-List'
              key={index}
              onClick={() => toggleTaskCompletion(index)}
              style={{ 
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? 'gray' : 'black',
                cursor: 'pointer'
              }}
            >
              {task.text}
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  )
}

export default AppPromo

import React from 'react'
import './AppPromo.css'

const AppPromo = () => {
  return (
    <div className="app-promo" id="app-promo">
      <div class="wrap">
        <h1>To-Do List</h1>

        <form action="#" class="formInput">
            <input type="text" class="task" id="taskEnter" placeholder="Enter Your Task" />
            <button type="submit" class="addBtn" id="addTask">Add</button>
            <button class="clearBtn" id="clearCompleted">Clear Completed</button>
        </form>
        
        <div class="input-result">
            <ul id="taskList" class="task-List"></ul>
        </div>
      </div>
    </div>
  )
}

export default AppPromo

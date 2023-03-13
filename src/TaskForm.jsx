import React from "react";
import { useState } from "react";

function TaskForm({createTask}) {

    const [title, setTitle] = useState("")

    const handleSubmit =(e)=>{
        e.preventDefault()
        const newTask = {
            title:title
        }

        createTask(newTask)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
        <button>Save Task</button>
      </form>
    </div>
  );
}

export default TaskForm;

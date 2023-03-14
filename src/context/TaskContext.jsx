import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { tasks as data } from "../tasks";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);


  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        description: task.description,
        id: tasks.length,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  return <TaskContext.Provider value={{
    tasks:tasks,
    deleteTask:deleteTask,
    createTask:createTask
  }}>{props.children}</TaskContext.Provider>;
}

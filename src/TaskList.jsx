

function TaskList({tasks}) {
  
  

  if (tasks.length === 0) {
    return <h1>No hay tasks</h1>;
  }
  

  return (
    <div>
      {tasks.map((task, index) => {
      return (
        <div key={index}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      )
      
    })}
    </div>
  );
}

export default TaskList;

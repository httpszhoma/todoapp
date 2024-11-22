import { useState } from "react";
import "./App.css";
import InputToDo from "./components/ToDoInput/InputToDo";
import ItemsContainer from "./components/Item/ItemsContainer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, complete: false } : task 
    );
    setTasks(updatedTasks.filter((_, i) => i !== index)); 
  };

  const onComplete = (index) => {
    const newTasksList = [...tasks]
    newTasksList[index] = {
        ...newTasksList[index],
        complete: !newTasksList[index].complete
    }
    setTasks(newTasksList)
  }

 

  return (
    <div className="main-page">
      <h1>TO DO LIST</h1>
      <InputToDo addTask={addNewTask} />
      <ItemsContainer tasks={tasks} onRemove={removeTask} onComplete={onComplete}/>
    </div>
  );
}

export default App;

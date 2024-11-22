import "./InputToDo.css";
import { useState } from "react";

export default function InputToDo({ addTask }) {
  const [task, setTask] = useState("");

  const submitBtn = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ task, complete: false }); 
      setTask(""); 
    }
  };

  return (
    <div className="input-div">
      <form className="todoform" onSubmit={submitBtn}>
        <input
          className="input"
          type="text"
          placeholder="What is the task today?"
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
                   
          }}

        />
        <button type="submit" className="todo-button">
          Add Task
        </button>
      </form>
    </div>
  );
}

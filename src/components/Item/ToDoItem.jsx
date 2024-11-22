import { useState } from "react";
import "./Item.css";

export default function ToDoItem({ task, onRemove, onComplete }) {

  return (
    <div className={`items ${task.complete ? "completed" : ""}`}>
      <input
        type="checkbox"
        className={`${task.complete ? "completed" : ""}`}
        checked={task.complete} 
        onChange={onComplete} 
      />
      <h3>{task.task}</h3>
      <button className="remove-button" onClick={onRemove}>
        <img src="/delete-icon.ico" alt="Delete" />
      </button>
    </div>
  );
}

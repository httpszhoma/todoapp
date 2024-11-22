import ToDoItem from "./ToDoItem";
import "./Item.css";

export default function ItemsContainer({ tasks, onRemove, onComplete }) {
  return (
    <div className="items-container">
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          onRemove={() => onRemove(index)}
          onComplete={() => onComplete(index)}
        />
      ))}
    </div>
  );
}

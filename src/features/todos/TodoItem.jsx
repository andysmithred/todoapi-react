import React from "react";
import { FaTimes } from "react-icons/fa";

const TodoItem = ({ todo, onToggleComplete, onTodoDelete }) => {
  return (
    <div
      className={`task ${todo.isComplete ? "complete" : ""}`}
      onDoubleClick={() => onToggleComplete(todo.id)}
    >
      <h3>
        {todo.name}
        <FaTimes
          onClick={() => onTodoDelete(todo.id)}
          style={{ color: "red" }}
        />
      </h3>
    </div>
  );
};

export default TodoItem;

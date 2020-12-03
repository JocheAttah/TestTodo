import React from "react";

function Todo({ todo, toggleComplete, deleteTodo }) {
  function handleCompleted() {
    toggleComplete(todo.id);
  }

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div>
      <input type="checkbox" onClick={handleCompleted} />
      <li
        style={{
          textDecoration: todo.completed ? "line-through" : null,
        }}
      >
        {todo.task}
      </li>
      <button onClick={handleDelete}> X </button>
    </div>
  );
}

export default Todo;

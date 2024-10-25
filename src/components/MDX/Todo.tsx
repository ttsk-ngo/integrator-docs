import React from "react";
import "@site/src/css/todo.css";

interface TodoProps {
  children: React.ReactNode;
}

const Todo: React.FC<TodoProps> = ({ children }) => (
  <div
    style={{
      border: "2px solid var(--todo-border-color)",
      padding: "10px",
      backgroundColor: "var(--todo-background-color)",
      color: "var(--todo-text-color)",
    }}
  >
    <strong>TODO:</strong> {children}
  </div>
);

export default Todo;

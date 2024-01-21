import { useState } from "react"
import React from 'react'
import { Button } from "react-bootstrap";
export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  let handleAddTodo = () => {
    if(newTodo.trim() !== ""){
      setTodos([...todos,{text:newTodo.trim(),checked: false}])
      setNewTodo("");
    }
  };
  
  let handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  let handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <input type="text" value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/>
      <Button variant="primary" onClick={handleAddTodo}>Add</Button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{
                  marginRight: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <Button variant="primary"
              style={{ marginTop: "5px", marginBottom: "5px", padding: "5px" }}
              onClick={() => handleDeleteTodo(index)}
            >
              Delete
            </Button>
          </li>
          ))}
          </ul>
    </div>
  )
}

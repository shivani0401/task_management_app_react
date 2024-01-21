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
    else{
      alert("Please enter a valid todo");
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
      <h3>Task Management App</h3>
      <input type="text" placeholder="enter a task, click add to save" style={{ width:'300px',marginTop: "5px", marginBottom: "5px", marginRight:"10px", padding: "5px", border:"none", borderRadius:'5px' }} value={newTodo} onChange={(e)=> setNewTodo(e.target.value)}/>
      <Button variant="primary" style={{marginTop: "5px", marginBottom: "5px", padding: "5px",border:"none", borderRadius:'5px'}} onClick={handleAddTodo}>Add</Button>
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
                  fontSize:'18px',
                  marginLeft:'10px'
                }}
              >
                {todo.text}
              </span>
            </div>
            <Button variant="primary"
              style={{ marginTop: "5px", marginBottom: "5px", padding: "5px", border:"none", borderRadius:'5px' }}
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

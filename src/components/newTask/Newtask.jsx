import React, { useState } from "react";
import './newtask.css';

import Form from "./Form";

 const Newtask = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = i =>
    setTodos(
      todos.map(
        (todo, k) =>
          k === i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      )
    );

    const handleFormSubmit = () => {
        localStorage.setItem('Todos', todos);
        localStorage.setItem('newtodo', setTodos);
      };

  return (
    <div className="App">
      <Form
        onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
      />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      {/* The button to setState to null */}
      {/* <button onClick={() => setTodos([])}>reset</button> */}
    </div>
  );
};

export default Newtask;
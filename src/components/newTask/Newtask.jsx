import React, { useState } from "react";
import { DatePicker, Input, Button } from "antd";
import "./newtask.css";

const Newtask = () => {
  // Putting existing todo's into the state
  const localStorageTodos = JSON.parse(localStorage.getItem("Todos")) || "";
  const [todos, setTodos] = useState([...localStorageTodos]);

  const [todoTitle, setTodoTitle] = useState("");
  const [todoDate, setTodoDate] = useState("");

  // This realdate is needed for the DatePick of Ant Design
  const [realDate, setRealDate] = useState(null);

  const handleSubmit = () => {
    // basic validation
    if (todoTitle.length > 0 && todoDate !== null) {
      let lastTodo = {};
      if (todos.length > 0) {
        lastTodo = todos.reduce((prev, current) =>
          prev.id > current.id ? prev : current
        );
      } else {
        lastTodo.id = 0;
      }
      // Get last Todo's ID

      const newTodo = {
        id: lastTodo.id + 1,
        title: todoTitle,
        completed: false,
        date: todoDate
      };

      setTodos([newTodo, ...todos]);
      localStorage.setItem("Todos", JSON.stringify([newTodo, ...todos]));
      setTodoTitle("");
      setTodoDate(null);
      setRealDate(null);
    } else {
      // TODO: Inform the client about validation
    }
  };

  const onInputChange = e => {
    setTodoTitle(e.target.value);
  };

  const onDateChange = (date, dateString) => {
    setRealDate(date);
    setTodoDate(dateString);
  };

  return (
    <main id="new-todo-content">
    

      <h1>Let's do this</h1>
      <Input
        id="form-input"
        name="todo-titel"
        value={todoTitle}
        placeholder="Todo"
        onChange={onInputChange}
      />{" "}
      <br />
      <DatePicker
        className="datepicker"
        id="form-input"
        onChange={onDateChange}
        value={realDate}
        format={"YYYY-MM-DD"}
      />
      <Button
        className="datepicker-button"
        type="primary"
        onClick={handleSubmit}
      >
        Create
      </Button>
    </main>
  );
};

export default Newtask;

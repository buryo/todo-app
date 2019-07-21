import React, { useState } from "react";
import { DatePicker, Input, Button } from 'antd';
import './newtask.css';

const Newtask = () => {
  // Putting existing todo's into the state
  const localStorageTodos = JSON.parse(localStorage.getItem('Todos')) || '';
  const [todos, setTodos] = useState([...localStorageTodos]);

  const [todoTitle, setTodoTitle] = useState('');
  const [todoDate, setTodoDate] = useState('');

  // This realdate is needed for the DatePick of Ant Design
  const [realDate, setRealDate] = useState(null);

  const handleSubmit = () => {
    // basic validation
    if (todoTitle.length > 0 && todoDate !== null) {
      const newTodo = {
        title: todoTitle,
        completed: false,
        date: todoDate,
      }

      setTodos([newTodo, ...todos])
      localStorage.setItem('Todos', JSON.stringify([newTodo, ...todos]));
      setTodoTitle('');
      setTodoDate(null);
      setRealDate(null);
    }
  };

  const onInputChange = (e) => {
    setTodoTitle(e.target.value);
  }

  const onDateChange = (date, dateString) => {
    setRealDate(date)
    setTodoDate(dateString);
  }

  return (
    <main id="new-todo-content">
      <h1>Enter your todo</h1>

      <Input id="form-input" name="todo-titel" value={todoTitle} placeholder="Todo" onChange={onInputChange} /> <br />
      <DatePicker id="form-input" onChange={onDateChange} value={realDate} format={"YYYY-MM-DD"} /> <br />
      <Button type="primary" onClick={handleSubmit}>Create</Button>

    </main>
  );
};

export default Newtask;
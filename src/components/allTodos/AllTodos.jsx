import React, { useState } from "react";
import { Icon, Button } from "antd";
import "./alltodos.css";
import ColumnGroup from "antd/lib/table/ColumnGroup";

const AllTodos = () => {
    const allLocalTodos = JSON.parse(localStorage.getItem("Todos")) || '';
    const [todos, setTodos] = useState([...allLocalTodos]);
    

    console.log(allLocalTodos);

    // the function to filter trough the todos state and remove unmatching id and proceed to set the localStorage to new adjusted object
      
    const handleDelete = id => {
      const newTodos = todos.filter(todo => todo.id !== id) 
      setTodos(newTodos)

      localStorage.setItem('Todos', JSON.stringify(newTodos));

    };
    

    return (
        <main>
            {todos.map(({ id, title, complete, date }, i) => (
                <div
                    key={id}
                    // onClick={() => toggleComplete(i)}
                    style={{
                        textDecoration: complete ? "line-through" : ""
                    }}
                >
                    {`${title} - Date: ${date}`}

                    {/* the check and delete icon with link */}

                        <Icon
                            // onClick={() => showId(id)}
                            style={{ paddingLeft: "3em" }}
                            type="check-circle"
                            theme="twoTone"
                            twoToneColor="#52c41a"
                        />


                    <Icon
                        style={{ marginRight: "3em" }}
                        type="delete"
                        theme="twoTone"
                        twoToneColor="#ff0000"
                        onClick={() => handleDelete(id)}
                    />
                </div>
            ))}
        </main>
    );
};

export default AllTodos;
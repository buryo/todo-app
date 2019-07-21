import React, { useState } from "react";
import { Icon, Button } from "antd";
import "./alltodos.css";

const AllTodos = () => {
    const allLocalTodos = JSON.parse(localStorage.getItem("Todos")) || '';
    const [todos, setTodos] = useState([...allLocalTodos]);

    const handleDelete = () => {
        todos(null)
    }
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
                    <a href="/">
                        <Icon
                            // style={{ paddingLeft: "3em" }}
                            type="check-circle"
                            theme="twoTone"
                            twoToneColor="#52c41a"
                        />
                    </a>

                    <Icon
                        // style={{ marginRight: "3em" }}
                        type="delete"
                        theme="twoTone"
                        twoToneColor="#ff0000"
                        onClick={handleDelete}
                    />
                </div>
            ))}
        </main>
    );
};

export default AllTodos;
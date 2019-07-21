import React, { useState } from "react";

const AllTodos = () => {
    const todos = JSON.parse(localStorage.getItem('Todos'));
    
    return (
        <div>
            {todos.map(({ title, complete, date }, i) => (
                <div
                    key={title}
                    // onClick={() => toggleComplete(i)}
                    style={{
                        textDecoration: complete ? "line-through" : ""
                    }}
                >
                    {`${title} Date:${date}`}
                </div>
            ))}
        </div>
    );
}

export default AllTodos;
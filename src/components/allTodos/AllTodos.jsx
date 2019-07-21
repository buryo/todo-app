import React, { useState } from "react";
import { Icon, Button } from "antd";
import "./alltodos.css";

const AllTodos = () => {
  const allLocalTodos = JSON.parse(localStorage.getItem("Todos"));
  const [todos, setTodos] = useState([...allLocalTodos]);
//   console.log(object);

//   const handleDelete = id => {
//     setUsers(users.filter(user => user.id !== id))
//   }

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

          {/* the check and delete icon with link */}
          <Icon
            // style={{ paddingLeft: "3em" }}
            type="check-circle"
            theme="twoTone"
            twoToneColor="#52c41a"
          />

          <Icon
            // style={{ marginRight: "3em" }}
            type="delete"
            theme="twoTone"
            twoToneColor="#ff0000"
          />
        </div>
      ))}
    </div>
  );
};

export default AllTodos;

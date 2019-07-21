import React, { useState } from "react";
import { Icon, Table } from "antd";
import { todoDeleter } from "../HelperFunctions";
import "./alltodos.css";

const AllTodos = () => {
    const allLocalTodos = JSON.parse(localStorage.getItem("Todos")) || '';
    const [todos, setTodos] = useState([...allLocalTodos]);
<<<<<<< HEAD
    

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

=======
>>>>>>> 9883afd88c61fc08fa7d00e2af6767770f6a3bca

    const deleteHandler = (e, id) => {
        e.currentTarget.parentNode.parentNode.classList.add('deleting');
        setTimeout(function () { setTodos(todoDeleter(id)); }, 500);
    }

    const columns = [
        {
            title: 'Todo',
            dataIndex: 'title',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Action',
            dataIndex: '',
            render: (text, record) =>
                <>
                    <Icon
                        onClick={(e) => deleteHandler(e, record.id)}
                        id="icon-complete"
                        type="check-circle"
                        theme="twoTone"
                        twoToneColor="#52c41a"
                    />
                    <Icon
                        onClick={(e) => deleteHandler(e, record.id)}
                        id="icon-edit"
                        type="edit"
                        theme="twoTone"
                        twoToneColor="#fbcb2f"
                    />
                    <Icon
                        onClick={(e) => deleteHandler(e, record.id)}
                        id="icon-delete"
                        type="delete"
                        theme="twoTone"
                        twoToneColor="#ff0000"
                    />
                </>
            ,
        }
    ];

    return (
        <main>
            <Table pagination={{ defaultPageSize: 10 }} rowKey="id" columns={columns} dataSource={todos} />
        </main>
    );
};

export default AllTodos;
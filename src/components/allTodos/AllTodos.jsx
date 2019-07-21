import React, { useState } from "react";
import { Icon, Table } from "antd";
import { todoDeleter } from "../HelperFunctions";
import "./alltodos.css";

const AllTodos = () => {
    const allLocalTodos = JSON.parse(localStorage.getItem("Todos")) || '';
    const [todos, setTodos] = useState([...allLocalTodos]);

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
import React, { useState } from "react";
import { Icon, Table } from "antd";
import { todoDeleter, todoApprover, todoEditor, orderByDescending } from "../HelperFunctions";
import "./alltodos.css";

const AllTodos = () => {
    const allLocalTodos = JSON.parse(localStorage.getItem("Todos")) || '';
    const [todos, setTodos] = useState([...allLocalTodos]);

    const deleteHandler = (e, id) => {
        e.currentTarget.parentNode.parentNode.classList.add('deleting');
        setTimeout(() => { 
            setTodos(todoDeleter(id)); 
        }, 500);
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
                        onClick={() => setTodos(todoApprover(record.id))}
                        id="icon-complete"
                        type="check-circle"
                        theme="twoTone"
                        twoToneColor="#52c41a"
                    />
                    <Icon
                        onClick={() => setTodos(todoEditor(record.id))}
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
            <Table 
                rowClassName={(record, index) => { return record.completed ? 'task-done' : '' }} 
                pagination={{ defaultPageSize: 10 }} 
                rowKey="id" 
                columns={columns} 
                dataSource={orderByDescending(todos, 'date')} />
        </main>
    );
};

export default AllTodos;
import React, { useState } from "react";
import { Icon, Table } from "antd";
import { todoDeleter } from "../HelperFunctions";
import "./todaysTodos.css";

const TodaysTodos = () => {
    const allLocalTodos = JSON.parse(localStorage.getItem("Todos")) || '';

    const todaysTodos = allLocalTodos.filter(todos => todos.date === new Date().toISOString().split('T')[0]) || '';
    const [todos, setTodos] = useState([...todaysTodos]);

    // Example data structure
    // const data = [
    //     {
    //         key: '1',
    //         todo: 'Bring dog outside',
    //         date: '2019-07-02',
    //         complete: 'No',
    //     },
    //     {
    //         key: '2',
    //         todo: 'Bring dog outside',
    //         date: '2019-07-02',
    //         complete: 'No',
    //     },
    // ];

    const deleteHandler = (e, id) => {
        e.currentTarget.parentNode.parentNode.classList.add('deleting');
        setTimeout(function () { setTodos(todoDeleter(id)); }, 500);
    }

    // Structure of columns
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
            <Table rowClassName={ (record, index) => { return record.completed ? 'task-done' : '' }   } pagination={{ defaultPageSize: 10 }} rowKey="id" columns={columns} dataSource={todos} />
        </main>
    );
};

export default TodaysTodos;
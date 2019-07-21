import React, { useState } from "react";
import { Icon, Table, Button } from "antd";
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

    const consoleLog = () => {
        console.log('Clicked');
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
            render: () =>
                <>
                    <a onClick={consoleLog} id="icon-complete">
                        <Icon
                            type="check-circle"
                            theme="twoTone"
                            twoToneColor="#52c41a"
                        />
                    </a>
                    
                    <a onClick={consoleLog} id="icon-delete">
                        <Icon
                            type="delete"
                            theme="twoTone"
                            twoToneColor="#ff0000"
                        />
                    </a>
                </>
            ,
        }
    ];

    return (
        <main>
            {/* {todos.map(({ id, title, complete, date }, i) => (
                <div
                    key={id}
                    // onClick={() => toggleComplete(i)}
                    style={{
                        textDecoration: complete ? "line-through" : ""
                    }}
                >
                    {`${title} - Date: ${date}`}

                    <a href="/">
                        <Icon
                            type="check-circle"
                            theme="twoTone"
                            twoToneColor="#52c41a"
                        />
                    </a>

                    <Icon
                        type="delete"
                        theme="twoTone"
                        twoToneColor="#ff0000"
                        onClick={handleDelete}
                    />
                </div>
            ))} */}

            <Table pagination={{ defaultPageSize: 10 }} rowKey="id" columns={columns} dataSource={todos} />
        </main>
    );
};

export default TodaysTodos;
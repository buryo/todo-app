import React, { useState } from "react";
import { Icon, Table, Button } from "antd";

const TodaysTodos = () => {
    const allLocalTodos = JSON.parse(localStorage.getItem("Todos")) || '';
    console.log(allLocalTodos);
    const [todos, setTodos] = useState([...allLocalTodos]);

    const handleDelete = () => {
        todos(null)
    }

    const data = [
        {
            key: '1',
            todo: 'Bring dog outside',
            date: '2019-07-02',
            complete: 'No',
        },
        {
            key: '2',
            todo: 'Bring dog outside',
            date: '2019-07-02',
            complete: 'No',
        },
        {
            key: '3',
            todo: 'Bring dog outside',
            date: '2019-07-02',
            complete: 'No',
        },
        {
            key: '4',
            todo: 'Bring dog outside',
            date: '2019-07-02',
            complete: 'No',
        },
    ];

    const columns = [
        {
            title: 'Todo',
            dataIndex: 'todo',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Complete',
            dataIndex: 'complete',
        },
    ];

    return (
        <main>
            {todos.map(({ title, complete, date }, i) => (
                <div
                    key={title}
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
            ))}

            <Table columns={columns} dataSource={data} />
        </main>
    );
};

export default TodaysTodos;
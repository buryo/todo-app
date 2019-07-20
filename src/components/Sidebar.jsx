import React from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";


export default class Sidebar extends React.Component {

    render() {
        return(
            <div className="sidebar">
                <div className="sidebar-header">
                    <div>Todo App</div>
                </div>
                <div className="sidebar-content">
                    <ul>
                        <li><Link to="/new-task">- New Task</Link></li>
                        <li><Link to="/today">- Today</Link></li>
                        <li><Link to="/all-todos">- All Todo's</Link></li>
                        <li><Link to="/planned-todos">- Planned</Link></li>
                    </ul>
                </div>
                <div className="sidebar-footer">

                </div>
            </div>
        );
    }
}
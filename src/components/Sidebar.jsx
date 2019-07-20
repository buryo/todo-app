import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";


const Sidebar = () => {
    const [sidebarMinimzed, setSidebarMinimzed] = useState(false);

    // The style when it's minimized
    const sidebarMinimizedStyle = {
        width: '64px',
    }

    // Sidebar handler
    const sidebarHandler = () => {
        setSidebarMinimzed(!sidebarMinimzed);
        console.log(sidebarMinimzed);
    }

    const sidebarLeft = () => {
        if (sidebarMinimzed) {
            return (
                <ul style={{ paddingLeft: '0', textAlign: 'center' }}>
                    <li><NavLink to="/new-task" activeClassName="active">-</NavLink></li>
                    <li><NavLink to="/today" activeClassName="active">-</NavLink></li>
                    <li><NavLink to="/all-todos" activeClassName="active">-</NavLink></li>
                    <li><NavLink to="/planned-todos" activeClassName="active">-</NavLink></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li><NavLink to="/new-task" activeClassName="active">- New Task</NavLink></li>
                    <li><NavLink to="/today" activeClassName="active">- Today</NavLink></li>
                    <li><NavLink to="/all-todos" activeClassName="active">- All Todo's</NavLink></li>
                    <li><NavLink to="/planned-todos" activeClassName="active">- Planned</NavLink></li>
                </ul>
            );
        }
    }

    return (
        <div className="sidebar" style={sidebarMinimzed ? sidebarMinimizedStyle : {}}>
            <div className="sidebar-header">
                <div>{sidebarMinimzed ? '' : 'Todo App'}</div>
            </div>
            <div className="sidebar-content">
                {sidebarLeft()}
            </div>
            <div className="sidebar-footer" onClick={sidebarHandler}>
                <div>
                    {sidebarMinimzed ? '»' : '«'}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
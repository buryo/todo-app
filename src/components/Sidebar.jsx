import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";


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
                    <li><Link to="/new-task">-</Link></li>
                    <li><Link to="/today">-</Link></li>
                    <li><Link to="/all-todos">-</Link></li>
                    <li><Link to="/planned-todos">-</Link></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li><Link to="/new-task">- New Task</Link></li>
                    <li><Link to="/today">- Today</Link></li>
                    <li><Link to="/all-todos">- All Todo's</Link></li>
                    <li><Link to="/planned-todos">- Planned</Link></li>
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
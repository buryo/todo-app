import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";
import AppName from './AppName';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus, faSun, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const [sidebarMinimzed, setSidebarMinimzed] = useState(false);

    // The style when it's minimized
    const sidebarMinimizedStyle = {
        width: '64px',
    }

    // Sidebar handler
    const sidebarHandler = () => {
        setSidebarMinimzed(!sidebarMinimzed);
    }

    const sidebarLeft = () => {
        if (sidebarMinimzed) {
            return (
                <ul style={{ paddingLeft: '0', textAlign: 'center' }}>
                    <li><NavLink to="/new-task" activeClassName="active"><FontAwesomeIcon icon={faPlus} /></NavLink></li>
                    <li><NavLink to="/today" activeClassName="active"><FontAwesomeIcon icon={faSun} /></NavLink></li>
                    <li><NavLink to="/all-todos" activeClassName="active"><FontAwesomeIcon icon={faTasks} /></NavLink></li>
                    <li><NavLink to="/planned-todos" activeClassName="active"><FontAwesomeIcon icon={faCalendarDay} /></NavLink></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li><NavLink to="/new-task" activeClassName="active"><FontAwesomeIcon icon={faPlus} /> New Todo</NavLink></li>
                    <li><NavLink to="/today" activeClassName="active"><FontAwesomeIcon icon={faSun} /> Today</NavLink></li>
                    <li><NavLink to="/all-todos" activeClassName="active"><FontAwesomeIcon icon={faTasks} /> All Todo's</NavLink></li>
                    <li><NavLink to="/planned-todos" activeClassName="active"><FontAwesomeIcon icon={faCalendarDay} /> Planned</NavLink></li>
                </ul>
            );
        }
    }

    return (
        <div className="sidebar" style={sidebarMinimzed ? sidebarMinimizedStyle : {}}>
            <div className="sidebar-header">
                <div>{sidebarMinimzed ? '' : AppName()}</div>
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
import React, { useState } from 'react';

const AppName = () => {
    let [appName, setAppName] = useState('');
    const [editingMode, setEditingMode] = useState(false);

    appName = localStorage.getItem('appName');

    const handleEditingMode = () => {
        setEditingMode(true);
    }

    const handleEnter = (e) => {
        if (e !== undefined && e.key === 'Enter') {
            // Make first letter uppercase (When autism kicks in..)
            const appName = e.target.value.replace(/./, x => x.toUpperCase());;

            setAppName(appName);
            localStorage.setItem('appName', appName);
            setEditingMode(false);
            document.querySelector('#app-title').innerHTML = appName;
        }
    }

    return (
        <>
            {
                editingMode ? <input onKeyDown={handleEnter} autoFocus type="text"/> : <span onClick={handleEditingMode}>{appName ? appName : 'Todo App'}</span>
            }
        </>
    );
}

export default AppName;
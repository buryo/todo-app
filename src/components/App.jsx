import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './sideBar/Sidebar';
import AllTodos from './allTodos/AllTodos';
import Example from './Test';
import Newtask from './newTodo/Newtask';
import TodaysTodos from './todaysTodos/TodaysTodos';
import { createEmptyTodos } from './HelperFunctions';


class App extends React.Component {
  render() {
    createEmptyTodos();

    return (
      <Router>
        <div className="App">
          <Sidebar />

          <Route path="/" exact />
          <Route path="/new-todo" component={Newtask} />
          <Route path="/today" component={TodaysTodos} />
          <Route path="/all-todos" component={AllTodos} />
          <Route path="/example" component={Example} />
        </div>
      </Router>
    );
  }
}

export default App;

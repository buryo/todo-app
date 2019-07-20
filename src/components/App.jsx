import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './Sidebar.jsx';
import Example from './Test';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          
          <Route path="/" exact />
          <Route path="/example" component={Example}/>
        </div>
      </Router>
    );
  }
}

export default App;

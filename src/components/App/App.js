import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TodoList from '@/containers/TodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route component={TodoList} />
        </Router>
      </div>
    );
  }
}

export default App;

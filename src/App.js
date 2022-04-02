import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import User from './pages/User'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/user' component={User}/>
      </Switch>
    </Router>
  );
}

export default App;

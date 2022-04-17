import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import User from './pages/User'
import Payment from './pages/Payment';
import ViewUser from './pages/ViewUser';
import Vehicle from './pages/Vehicle';
import ViewVehicle from './pages/ViewVehicle';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/user' component={User}/>
        <Route exact path="/vehicle" component={Vehicle}/>
        <Route exact path="/viewuser/:id" component={ViewUser}/> 
        <Route  path="/payment" component={Payment}/>
        <Route  path="/viewvehicle/:id" component={ViewVehicle}/>
      </Switch>
    </Router>
  );
}

export default App;

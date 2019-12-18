import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./_components/Home/home";
import Login from './_components/Login/login';
// import './App.css';

function App() {
  return (
    
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </Router>
   
  );
}

export default App;

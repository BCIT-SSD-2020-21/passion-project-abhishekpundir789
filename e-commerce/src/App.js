import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Switch>
        <Route path ="/Login">
            <Login />
        </Route>
          <Route path ="/checkout">
          <Header />
          <Checkout />
          </Route>
          <Router path = "/">
          <Header />
          <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

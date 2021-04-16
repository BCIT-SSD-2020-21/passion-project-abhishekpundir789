import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment'
import Orders from './Orders'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './Firebase/firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51IgnUaGUcL5OfV5p5SCfHLLqjHEJa1F36PdLpIFRScG2GrnzaeqVFpX4lLdO4T6wGVb4X9JrUml2gJItcs1ZvV8U005xp4kFnx");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ', authUser);

      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path = "/orders">
            <Orders />
          </Route>
        <Route path ="/login">
            <Login />
        </Route>
          <Route path ="/checkout">
          <Header />
          <Checkout />
          </Route>
          <Route path ="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
          </Route>
          <Route path = "/">
          <Header />
          <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

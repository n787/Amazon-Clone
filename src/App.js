import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
function App() {
  const [{ user },dispatch] = useStateValue(); 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){  //if user logged in...
        dispatch({
          type:"SET_USER",   //action is set user
          user:authUser,     
        });
      }
      else{
        dispatch({        // if user logged out...
          type:"SET_USER",   
          user:null,    
        });
      }
    });
    return() =>{
      // any cleanup...
      unsubscribe();
    }
  },[]);

  return (
    <Router>
      <div className="App">
        <Switch>
        
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route> 
          <Route path="/">
            <Header/>
            <Home/>
        </Route> 
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

// to change as {localhost:3000/checkout or /login...}  We need to use react-ROUTER
// Router - parent- wraps everything in it,
// Route- child -Load the specific page
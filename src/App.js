import React from 'react';
import Home from './Pages';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Pages/login';



function App() {
  

  return (
    <>
    
    <div className="App">
      <Router>
        <Switch>
          <Route component={Login} exact path="/"  />
          <Route component={Home} path="/home" />
        </Switch>
      </Router>
    </div>
      
    </>
  );
}

export default App;

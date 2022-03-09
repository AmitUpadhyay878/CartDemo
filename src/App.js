
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Cart from './components/CartPage'
import { useState } from "react";
import CartPage from "./components/CartPage";
function App() {

  

  return (
    
      <Router>
        <Header /> 
        <div className="App">
          <Switch>
          <Route path="/"  exact ><Home /></Route>
          <Route path="/cart"><CartPage /></Route>
         <Route path="/cart/:id" component={CartPage} />
         </Switch>
          </div>
      </Router>
   
  );
}

export default App;

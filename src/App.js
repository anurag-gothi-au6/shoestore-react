import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register"
import Product from "./components/Product"
import Cart from './components/Cart'
import Finish from './components/Finish'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='break'></div>
      <Switch>
      <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/finish" component={Finish} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
}

export default App;

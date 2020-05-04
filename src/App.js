import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import DrinksList from "./components/drinks-list.component";
import EditDrink from "./components/edit-drink.component";
import CreateDrink from "./components/create-drink.component";
import CreateUser from "./components/create-user.component";
import SpecificCocktail from "./components/SpecificCocktail";
import RandomCocktail from "./components/RandomCocktail";
import WelcomePage from "./components/WelcomePage";
import CurrentSupply from "./components/CurrentSupply";
import Foot from "./components/Foot";
import LoginUser from "./components/user-login.component";
import AuthState from "../src/contexts/auth/AuthState";
import AlertState from '../src/contexts/alert/AlertState';
import Alerts from "../src/components/layout/Alerts"
// need to define AuthState, AlertState, Alerts
function App() {
  return (
      <Router>
        <div className="container heightMinusFooter">
          <Navbar />

          <br />

          <Route path="/welcome" component={WelcomePage} />
          <Route path="/" exact component={DrinksList} />
          <Route path="/specific" component={SpecificCocktail} />
          <Route path="/random" component={RandomCocktail} />
          <Route path="/current" component={CurrentSupply} />
          <Route path="/edit/:id" component={EditDrink} />
          <Route path="/create" component={CreateDrink} />
          <Route path="/user" component={CreateUser} />
          <Route path="/login" component={LoginUser} />
        </div>

        <div className="container">
          <Foot />
        </div>
      </Router>
     
   
  );
}

export default App;

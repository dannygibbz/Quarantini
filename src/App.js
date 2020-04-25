import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component"
import EditExercise from "./components/edit-exercise.component"
import CreateExercise from "./components/create-exercise.component"
import CreateUser from "./components/create-user.component"
import SpecificCocktail from "./components/SpecificCocktail"
import RandomCocktail from "./components/RandomCocktail"
import WelcomePage from "./components/WelcomePage"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/specific" component={SpecificCocktail} />
        <Route path="/random" component={RandomCocktail} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  )
}

export default App

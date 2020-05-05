import React, { Component } from "react"
import { Link } from "react-router-dom"
import logo from './img/quarantini.jpg'

export default class Navbar extends Component {
  render() {
    const userSignedIn = localStorage.getItem("currentUser")

    // set currentUser on global state somehow, so it can be referenced here
    //currentUser

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg" >
        <img src={logo} alt="Logo" height="100px" />
        <Link to="/welcome" className="navbar-brand">
          Quarantini
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/specific" className="nav-link">
                Cocktail By Name
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/current" className="nav-link">
                Cocktail By Spirit
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/random" className="nav-link">
                Cocktail by Chance
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create Drink Log
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Saved Drinks
              </Link>
            </li>

            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link" style={{ display: "0px" }}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

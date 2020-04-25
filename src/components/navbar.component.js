import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/welcome" className="navbar-brand">
          Quarantini
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/specific" className="nav-link">
                Specific Cocktail
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/random" className="nav-link">
                Random Cocktail
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
          </ul>
        </div>
      </nav>
    )
  }
}

import React from "react"
import { Link } from "react-router-dom"

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to Quarantini</h1>
      <h5>We help you choose what to drink when you're stuck at home.</h5>

      <div style={{ paddingTop: "15px" }}>
        <Link to="/specific">Cocktail By Name</Link>. If you know the name of a
        drink but not the ingredients, this is the page you want.
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Link to="/current">Cocktail By Spirit</Link>. If you want to try a new
        cocktail using liquor you already have, this is the page you want.
      </div>
      <div style={{ paddingTop: "10px" }}>
        <Link to="/random">Cocktail by Chance</Link>. If you're adventurous and
        up for anything, this page will give you a random cocktail recipe.
      </div>
    </div>
  )
}

export default WelcomePage

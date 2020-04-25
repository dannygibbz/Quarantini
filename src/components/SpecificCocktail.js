import React, { Component } from "react"

class SpecificDrink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      visible: false,
    }
  }

  onChange = event => {
    this.setState({ input: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.input}`
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({
          input: "",
          visible: true,
          drinkName: data.drinks[0].strDrink,
          instructions: data.drinks[0].strInstructions,
          recommendedGlass: data.drinks[0].strGlass,
          ingredients1: data.drinks[0].strIngredient1,
          ingredients2: data.drinks[0].strIngredient2,
          ingredients3: data.drinks[0].strIngredient3,
          ingredients4: data.drinks[0].strIngredient4,
          ingredients5: data.drinks[0].strIngredient5,
          ingredients6: data.drinks[0].strIngredient6,
          measurement1: data.drinks[0].strMeasure1,
          measurement2: data.drinks[0].strMeasure2,
          measurement3: data.drinks[0].strMeasure3,
          measurement4: data.drinks[0].strMeasure4,
          measurement5: data.drinks[0].strMeasure5,
          measurement6: data.drinks[0].strMeasure6,
          picture: data.drinks[0].strDrinkThumb + "/preview",
        })
      )
      .catch(e => console.log("error", e))
  }

  render() {
    const name = this.state.drinkName
    const instructions = this.state.instructions
    const glass = this.state.recommendedGlass

    let measurement1 =
      this.state.measurement1 === null
        ? null
        : this.state.measurement1 + this.state.ingredients1

    let measurement2 =
      this.state.measurement2 === null
        ? this.state.ingredients2
        : this.state.measurement2 + this.state.ingredients2

    let measurement3 =
      this.state.measurement3 === null
        ? this.state.ingredients3
        : this.state.measurement3 + this.state.ingredients3

    let measurement4 =
      this.state.measurement4 === null
        ? null
        : this.state.measurement4 + this.state.ingredients4

    let measurement5 =
      this.state.measurement5 === null
        ? null
        : this.state.measurement5 + this.state.ingredients5

    let measurement6 =
      this.state.measurement6 === null
        ? null
        : this.state.measurement6 + this.state.ingredients6

    let picture = this.state.picture

    let showInfo = !this.state.visible ? (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} onChange={this.onChange} />
        <button>Search!</button>
      </form>
    ) : (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.onChange} />
          <button>Search!</button>
        </form>
        <div>
          <h2> Cocktail Name: {name}</h2>
          <img
            src={picture}
            alt="cocktail"
            style={{ height: "100px", width: "100px" }}></img>
          <h2>
            Ingredients: {measurement1}
            {measurement2 ? ", " + measurement2 : null}
            {measurement3 ? ", " + measurement3 : null}
            {measurement4 ? ", " + measurement4 : null}
            {measurement5 ? ", " + measurement5 : null}
            {measurement6 ? ", " + measurement6 : null}
          </h2>
          <h2>Instructions: {instructions}</h2>
          <h2>Recommended Glass: {glass}</h2>
        </div>
      </div>
    )

    return (
      <div
        className="App"
        style={{
          background: "rgba(0, 0, 0, 0.6)",
          color: "white",
          boxShadow: "0 px 0px 10px",
          paddingBottom: "5px",
        }}>
        <h1>If you're looking for a specific cocktail, search it below</h1>
        {showInfo}
      </div>
    )
  }
}

export default SpecificDrink

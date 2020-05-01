import FindDrink from "./FindDrink"
import React, { Component } from "react"
import { Input } from "antd"
const { Search } = Input

// import { Result } from "antd"
class BySpirit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      drinks: [],
      visible: false,
    }
  }

  onChange = event => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = event => {
    console.log(this.state.input)
    event.preventDefault()
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.input}`
    fetch(url)
      .then(res => res.json())
      .then(result =>
        this.setState({
          input: "",
          drinks: result.drinks,
          title: result.drinks.strDrink,
          picture: result.drinks.strDrinkThumb + "/preview",
        })
      )
      .catch(e => console.log("error", e))
  }

  render() {
    console.log(this.state.drinks)
    let drinkUp = this.state.drinks.map(drink => {
      //   console.log(drink)

      return <FindDrink id={drink.idDrink} key={drink.idDrink} />
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Search
            value={this.state.input}
            onChange={this.onChange}
            placeholder="Search cocktails by spirit. Ex: Whiskey"
            onSearch={value => console.log(value)}
            style={{ width: "100%" }}
          />
        </form>
        <p>{this.state.title}</p>
        {drinkUp}
      </div>
    )
  }
}

export default BySpirit
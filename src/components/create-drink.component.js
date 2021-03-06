import React, { Component } from "react"
import { message, Select } from "antd"
import DatePicker from "react-datepicker"
import { withRouter } from "react-router"
import "react-datepicker/dist/react-datepicker.css"
import axios from "axios"

class CreateDrink extends Component {
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: "",
      description: "",
      date: new Date(),
      users: [],
    }
  }

  componentDidMount() {
    axios.get("/users/").then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username,
        })
      }
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const drinks = {
      username: this.state.username,
      description: this.state.description,
      date: this.state.date,
    }

    console.log(drinks)
    axios
      .post("/drinks/add", drinks)
      .then(res => {
        console.log(res.data)
      })
      .then(res => {
        message.success("Drink Successfully Added", 2)
        this.props.history.push("/saved")
      })
      .catch(e => {
        message.error("Can't Create Drink")
      })
  }

  render() {
    return (
      <div>
        <h3>Create New Drink Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {this.state.users.map(function(user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>

          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Drink Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateDrink)

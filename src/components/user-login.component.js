import React, { Component } from "react"
import { message } from "antd"
import axios from "axios"

export default class LoginUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }


  inputEmail = e => {
    this.setState({
      email: e.target.value,
    })
  }
  inputPassword = e => {
    this.setState({
      password: e.target.value,
    })
  }
  onSubmit = e => {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(user)

    axios
      .post("http://localhost:5000/auth", user)
      .then(res => {
        message.success("Your Logged In", 2)
      })
      .catch(e => {
        message.error("Try Again")
      })

    this.setState({
      email: "",
      password: "",
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">

            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.inputEmail}
            />

            <label>Password: </label>
            <input
              type="password"
              required
              className="form-control"
              value={this.state.password}
              onChange={this.inputPassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    )
  }
}

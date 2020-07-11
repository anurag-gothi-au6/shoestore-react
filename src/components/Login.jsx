import React, { Component } from "react";
import "../styles/TodoListCreateForm.css";
import { connect } from "react-redux";
import { logIn } from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: [],
  };

  handleChange = (e) => {
    this.setState({errors:''})
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Log in
    const { email, password} = this.state;
    if(password.length===0||email.length===0){
      return this.setState({errors:'Empty Values'})
    }
    else {
      this.props.logIn({ email, password });
      this.props.history.push("/home");
    }
  };
  render() {
    return this.props.user ? (
      <Redirect to="/home" />
    ) : (
      <form className="todo__form" onSubmit={this.handleSubmit}>
              <h1 style={{marginBottom:'20px'}}>Login</h1>
        <input
          onChange={this.handleChange}
          value={this.state.title}
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input type="submit" className="btnn btn-create" value="Login" />
      </form>
    );
  }
}

const mapStateToProps = storeState => {
  return { user: storeState.userState.user };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: user => dispatch(logIn(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

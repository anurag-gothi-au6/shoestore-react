import React, { Component } from "react";
import "../styles/TodoListCreateForm.css";
import { connect } from "react-redux";
import { register } from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
    errors: [],
  };

  handleChange = (e) => {
    this.setState({errors:''})
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Log in
    const { email, password, confirmPassword } = this.state;
    if(password.length===0||confirmPassword.length===0||email.length===0){
      return this.setState({errors:'Empty Values'})
    }
    if (password !== confirmPassword) {
      return this.setState({ errors: "Conifrm Password Doesn't Match" });
    } else {
      this.props.register({ email, password });
      this.props.history.push("/home");
    }
  };

  render() {
    return this.props.user ? (
      <Redirect to="/home" />
    ) : (
      <form className="todo__form" onSubmit={this.handleSubmit}>
        <h1>Register</h1>
        <input
          onChange={this.handleChange}
          value={this.state.title}
          type="email"
          name="email"
          placeholder="email..."
          required
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <input
          onChange={this.handleChange}
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          required
        />
        <p style={{color:'white',fontWeight:'bolder',textShadow:'2px 2px #FF0000'}}>{this.state.errors}</p>
        <input type="submit" className="btnn btn-create" value="Register" />
      </form>
    );
  }
}

const mapStateToProps = (storeState) => {
  return { user: storeState.userState.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => dispatch(register(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

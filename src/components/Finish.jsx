import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Finish extends Component {
  state = {
    total : localStorage.getItem('total')
  };

  componentWillUnmount(){
      localStorage.setItem('total',0)
  }
  render() {
    return this.props.user === null ? (
      <Redirect to="/register" />
    ) : (
      <div>
          <h1>Thank You For Buying Shoes From Here!!! Total Purchase: {this.state.total}</h1>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps)(Finish);

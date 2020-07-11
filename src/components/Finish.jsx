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
          <p className='head'>Thank You For Buying!!! Total Purchase: {this.state.total}</p>
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

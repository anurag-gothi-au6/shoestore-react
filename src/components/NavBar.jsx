import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { logOut } from "../redux/actions/userActions";
import '../styles/Navbar.css'

const button = {
  margin: "10px",
  height:"50px",
  width:"100px",
  float:"right"
}


const NavBar = ({ user, logOut,cart ,history, ...restProps }) => {
  console.log(restProps);
  const handleLogout = () => {
    logOut();
    history.push("/login");
  };
  return (
    <div className='navbar'>
              <Link to="/home">
          <img className='logo' src='https://res.cloudinary.com/anuraggothi/image/upload/v1594462311/shoe_pl3dsm.jpg' alt='home'></img>
        </Link>
       
      {user !== null ? (
        <div>
        <button style= {button} onClick={handleLogout}>Logout</button>
        <Link to="/cart">
        <button style={button}>cart ({cart.totalQuantity})</button>
          </Link>
          </div>
        
      ) : (
        <div>
        <Link to="/login">
          <button style={button}>Login</button>
        </Link>
        <Link to="/register">
        <button style={button}>Register</button>
      </Link>
      <Link to="/cart">
      <button style={button}>cart ({cart.totalQuantity})</button>
        </Link>
      </div>
      )}
    </div>
  );
};

const mapStateToProps = storeState => {
  return {
    user: storeState.userState.user,
    cart: storeState.cartState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));

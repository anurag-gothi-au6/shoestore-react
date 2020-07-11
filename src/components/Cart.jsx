import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../styles/Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { qty, finish } from "../redux/actions/cartActions";

class Cart extends Component {

  state={
    finish :''
  } 


  finishPymt = () => {
    localStorage.setItem('total',this.props.products.total)
    if(this.props.products.products.length===0){
      this.props.history.push('/home')
      return
    }
    if(this.props.user===null){
      this.props.history.push('/register')
      return
    }

    if(this.props.products.products.length===0){
      this.props.history.push('/home')
    }
    else{
      this.props.Finish();
      this.props.history.push('/finish')
    }
  };

  componentDidMount(){
    this.props.products.products.length ? this.setState({finish:'finish payment'}) : this.setState({finish:'Add Products'})    
  }

  render() {
    const addedItems = this.props.products.products.length ? (

      this.props.products.products.map((item) => {
        return (
          <tr>
            <td>
              <img
                src={item.productImageURL}
                className="cartImage"
                alt="shoes"
                height="60px"
                style={{ borderRadius: "50%" }}
              />
            </td>
            <td>{item.productName}</td>
            <td className="d-flex">
              <button
                type="submit"
                className="btn btn-dark"
                onClick={() => {
                  item.quantity += 1;
                  this.props.Qty(item.productId, item);
                }}
              >
                +
              </button>
              <span className="px-2 font-bold">{item.quantity}</span>
              <button
                type="submit"
                className="btn btn-dark"
                onClick={() => {
                  item.quantity -= 1;
                  this.props.Qty(item.productId, item);
                }}
              >
                -
              </button>
            </td>
            <td>$ {item.productPrice}</td>
            <td>$ {(Number(item.productPrice) * Number(item.quantity)).toFixed(2)}</td>
          </tr>
        );
      })
    ) : (
      <p>Nothing added Yet</p>

    );
    return (
      <div className="container">
        <div className="font-bold my-2">
          Cart total :{" "}
          <span className="price">$ {this.props.products.total.toFixed(2)}</span>
        </div>
        <table className="table">
          <tbody>{addedItems}</tbody>
        </table>
        <button onClick={this.finishPymt} className="btnn btn-dark">
          {this.state.finish}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    products: storeState.cartState,
    user: storeState.userState.user,
  };
};

const mapDispatchToProps = (disptach) => {
  return {
    Qty: (id, newProduct) => disptach(qty(id, newProduct)),
    Finish: () => disptach(finish()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));

import React, { Component } from "react";
import "../styles/Product.css";
import { connect } from "react-redux";
import { addProduct } from "../redux/actions/cartActions";
import {Card} from 'react-bootstrap'
import {
  Grid
//   Card,
//   CardContent,
//   Typography,
//   CardHeader,
} from "@material-ui/core/";

export class Product extends Component {
  render() {
    return (
      <div className='cards'>
        <Grid
          container
          spacing={4}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {this.props.products.map((elem) => (
             <Grid
              item
              xs={8}
              sm={6}
              md={3}
              key={this.props.products.indexOf(elem)} >
    <Card style={{ width: '16em',textAlign:'center', margin:'auto', alignItems:'center' }}>
  <Card.Img variant="top" src={elem.productImageURL} />
  <Card.Body>
          <Card.Title>{elem.productName}</Card.Title>
    <Card.Text>
          $ {elem.productPrice}
    </Card.Text>
    <button className='AddTo btn-edit' onClick={()=>this.props.ADDER(elem)}>Add To Cart</button>
  </Card.Body>
</Card>
</Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    products: storeState.productState.products,
  };
};


const mapDispatchToProps = disptach => {
  return {
    ADDER: (product) => disptach(addProduct(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);

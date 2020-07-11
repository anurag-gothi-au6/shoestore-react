import {
    // GET_CART,
    ADD_PRODUCT,
    QTY,
    FINISH
} from "../actionTypes";
  
  export const addProduct = product => {
    console.log(product)
    return {
      type: ADD_PRODUCT,
      payload: product
    };
  };
  
  export const qty = (id, newProduct) => {
    return {
      type: QTY,
      payload: {
          id: id,
          newProduct
      }
    };
  };

  export const finish = ()=>{
    return{
      type:FINISH
    }
  }
  

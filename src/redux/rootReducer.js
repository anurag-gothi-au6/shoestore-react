import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";
import productReducer from './reducers/productReducer'
import cartReducer from './reducers/cartReducer'
const rootReducer = combineReducers({
  todoState: todoReducer,
  userState: userReducer,
  productState: productReducer,
  cartState: cartReducer
});

/**{
 *  todoState: {
 *    todos: null
 *  },
 * 
 * userState: {
 *  user: null
 * }
} */

export default rootReducer;

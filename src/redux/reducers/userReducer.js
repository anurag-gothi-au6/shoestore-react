import { LOG_IN, LOG_OUT, REGISTER } from "../actionTypes";

const initialState = {
  user: null
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER:
      return { ...state, user: payload }
    case LOG_IN:
      return { ...state, user: payload };
    case LOG_OUT:
      return { ...state, user: null };
    default:
      return state;
  }
};

export default userReducer;

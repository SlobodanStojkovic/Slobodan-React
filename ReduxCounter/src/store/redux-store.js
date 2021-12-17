import { configureStore } from "@reduxjs/toolkit";

import counterSliceReducer from "./counter-slice";
import authSliceReducer from "./auth-slice";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
    //like this is used when we have multiple reducers, when we have just one we use reducer: counterSlice.reducer instead of an object
  },
});

export default store;

/* CODE BEFORE USING REDUX TOOLKIT - npm install @reduxjs/toolkit


import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter, //if we dont set this, it WILL NOT BE MERGED with existing state. ALL OTHER STATES MUST BE SET WHEN WE UPDATE ONE STATE
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggleCounter") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
 */

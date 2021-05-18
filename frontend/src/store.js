import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./reducers";



// const cartItemsFromStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : [];


  const cartFromLocalStorage = localStorage.getItem("cart")
  ?  JSON.parse(localStorage.getItem('cart'))
  : [];

const userInfoFromStorage = localStorage.getItem('user')
? JSON.parse(localStorage.getItem('user'))
: null;

const initialState = {
    cart: {
        cartItems: cartFromLocalStorage,
    },
    userLogin: { user: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
    combineReducers,
    initialState,
    compose(applyMiddleware(...middleware))
);

export default store;
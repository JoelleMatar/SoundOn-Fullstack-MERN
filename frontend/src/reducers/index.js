import { combineReducers } from "redux";
import {authReducers} from "./authReducers";
import errorReducers from "./errorReducers";
import { cartReducer } from "./cartReducers";
import { getProductDetailsReducer, getProductsReducer } from "./productReducers";
import { getCategoriesReducer } from "./categoryReducers";
import {
    orderCreateReducer,
    orderDetailsReducer,
    orderListMyReducer,
    orderListReducer,
  } from './orderReducers';

export default combineReducers({
    userLogin: authReducers,
    errors: errorReducers,
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    getCategories: getCategoriesReducer,
});
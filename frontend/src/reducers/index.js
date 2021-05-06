import { combineReducers } from "redux";
import authReducers from "./authReducers";
import errorReducers from "./errorReducers";
import { cartReducer } from "./cartReducers";
import { getProductDetailsReducer, getProductsReducer } from "./productReducers";

export default combineReducers({
    auth: authReducers,
    errors: errorReducers,
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
});
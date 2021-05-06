import React, { Component } from 'react';
import CartItem from './CartItem';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// actions
import { addToCart, removeFromCart } from "../actions/cartActions";

const ShoppingCart = () => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0);
    };

    return (
        <div className="shoppingCart">
            <div className="cart-left">
                <h2>Shopping Cart</h2>
                {
                    cartItems.length === 0 ? (
                        <div style={{color: "honeydew", fontSize: "35px", textAlign: "center", marginTop: "20px"}}>Your Cart Is Empty! <Link to="/instrumentsCategories">Go Back</Link></div>
                    ) : 
                    cartItems.map((item) => (
                        <CartItem key={item.product}
                                  item={item} 
                                  qtyChangeHandler={qtyChangeHandler} 
                                  removeHandler={removeHandler} 
                        />
                    ))
                }
            </div>
            <div className="cart-right">
                <div className="cart-info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Purchase Items</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
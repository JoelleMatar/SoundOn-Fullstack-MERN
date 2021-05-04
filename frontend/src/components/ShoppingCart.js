import React, { Component } from 'react';
import CartItem from './CartItem';

const ShoppingCart = () => {
    return (
        <div className="shoppingCart">
            <div className="cart-left">
                <h2>Shopping Cart</h2>

                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                
            </div>
            <div className="cart-right">
                <div className="cart-info">
                    <p>Subtotal (0) items</p>
                    <p>200$</p>
                </div>
                <div>
                    <button>Purchase Items</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
    const [qty, setQty] = useState(1);

    return (
        <div className="cartItem">
            <div className="cartItem-image">
                <img src={item.imageUrl} className="productImages" alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartItem-name">
                <p>{item.name}</p>
            </Link>

            <p className="cartItem-price">${item.price}</p>

            <input className="cartItem-select" value={item.qty} disabled></input>

            <button className="cartItem-deleteBtn" onClick={() => removeHandler(item.product)}><i className="fa fa-trash"></i></button>
        </div>
    )
}

export default CartItem;
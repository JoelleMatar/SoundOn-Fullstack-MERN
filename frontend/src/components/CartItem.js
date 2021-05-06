import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
    return (
        <div className="cartItem">
            <div className="cartItem-image">
                <img src={item.imageUrl} className="productImages" alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className="cartItem-name">
                <p>{item.name}</p>
            </Link>

            <p className="cartItem-price">${item.price}</p>

            <select className="cartItem-select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                ))}
            </select>

            <button className="cartItem-deleteBtn" onClick={() => removeHandler(item.product)}><i className="fa fa-trash"></i></button>
        </div>
    )
}

export default CartItem;
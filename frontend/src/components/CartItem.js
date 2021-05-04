import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CartItem = () => {
    return (
        <div className="cartItem">
            <div className="cartItem-image">
                <img src="https://cdn.mos.cms.futurecdn.net/mLyk54LhkcuvqaLMVULcj7-970-80.jpg.webp" className="productImages" alt="guitar1" />
            </div>
            <Link to={`/product/${111}`} className="cartItem-name">
                <p>Gibson</p>
            </Link>

            <p className="cartItem-price">200$</p>

            <select className="cartItem-select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>

            <button className="cartItem-deleteBtn"><i className="fa fa-trash"></i></button>
        </div>
    )
}

export default CartItem;
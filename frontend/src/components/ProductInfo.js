import React, { useDebugValue } from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { getProductDetails } from "../actions/productActions";
import { addToCart } from "../actions/cartActions";

const ProductInfo = ({ match, history }) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push("/shoppingCart");
    }

    return (
        <div className="container productsInfo">
            {
                loading ? <h2 style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>Loading ...</h2> :
                error ? <h2 style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>{error}</h2> :
                (
                    <>
                        <div className="row productInfo-left">
                            <div className="col-sm-6 col-xs-12 image-left">
                                <img src={product.imageUrl} className="productImages" alt={product.name} />
                            </div>
                            <div className="col-sm-6 col-xs-12 info-left">
                                <p className="name-left">{product.name}</p>
                                <p className="info-left-desc">Description: {product.description}</p>
                                <hr />
                                <div className="info-right">
                                    <p>
                                        Price: <span>${product.price}</span>
                                    </p><hr />
                                    <p>
                                        Status: <span>{product.countInStock > 0 ? "In Stock" : "Out Of Stock" }</span>
                                    </p><hr />
                                    <p>
                                        Quantity:
                                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                <option key={x + 1} value={x + 1}>
                                                    {x + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </p><hr />
                                    <p className="addtocart-product">
                                        <button type="button" onClick={addToCartHandler}>Add To Cart <i className="fa fa-shopping-cart"></i></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {/* <div className=""> */}

            {/* </div> */}
        </div>
    )
}

export default ProductInfo;
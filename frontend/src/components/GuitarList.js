import React from 'react';
import Guitar from '../images/guitarSet.jpg';
import { Link } from 'react-router-dom';
import Product from './Product';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// actions
import { getProducts as listProducts } from "../actions/productActions";

const GuitarList = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            {
                loading ? <h2 style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>Loading ...</h2> : 
                error ? <h2 style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>{error}</h2> : 
                products.map((product) => (
                    <Product key={product._id} 
                             productId={product._id} 
                             name={product.name}
                             price={product.price}
                             description={product.description}
                             imageUrl={product.imageUrl} />
                ))
            }
        </div>
    )
}


export default GuitarList
import React, { useState } from 'react';
import Guitar from '../images/guitarSet.jpg';
import { Link } from 'react-router-dom';
import Product from './Product';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBCol } from "mdbreact";
import CheckboxFilter from "./CheckboxFilter";

// actions
import { getProducts as listProducts } from "../actions/productActions";

const GuitarList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <div className="col-md-8 Filter">
                <CheckboxFilter />
            </div>
            <div className="col-md-4 Filter">
                <div className="input-group rounded">
                    <input type="search" className="form-control rounded" id="searchBox" placeholder="Search" aria-label="Search"
                        aria-describedby="search-addon" onChange={(event) => {setSearchTerm(event.target.value);}} />
                    <span className="input-group-text border-0" id="search-addon">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
            </div>
                {
                    loading ? <h2 style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>Loading ...</h2> : 
                    error ? <h2 style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>{error}</h2> : 
                
                    products.filter((product) => {
                        if(searchTerm == "") {
                            return product
                        }
                        else if(product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                            return product
                        }
                    }).map((product) => (
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
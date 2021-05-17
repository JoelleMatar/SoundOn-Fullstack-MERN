import React, { useState } from 'react';
import Guitar from '../images/guitarSet.jpg';
import { Link } from 'react-router-dom';
import Product from './Product';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBCol } from "mdbreact";
import CheckboxFilter from "./CheckboxFilter";
import * as actionTypes from "../constants/productConstants";
import axios from "axios";

// actions
import { getProducts as listProducts } from "../actions/productActions";

const GuitarList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    
    const [currentfilters, setFilters] = useState([]);
    // console.log(currentfilters);

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    const initialProducts = products;

    const [filteredProducts, setFilteredProducts] = useState(getProducts.products);
    console.log("current" + currentfilters);
    console.log("filtered" + products);

    
    const getFilteredProducts = (variables) => {
        axios.post('/api/products/byCategory', variables)
            .then(response => {
                // if (response.data.success) {
                //     setFilteredProducts(response.data.products)
                //     console.log("success");
                //     // setPostSize(response.data.postSize)
                // } 
                if(response.status === 200) {
                    setFilteredProducts(response.data);
                }
                console.log(response);
            })
            console.log(variables);
            
    }

    const getFilteredProductsGetReq = () => {
        axios.get('/api/products')
            .then(response => {
                if(response.status === 200) {
                    setFilteredProducts(response.data);
                }
                // console.log(response);
            })
            // console.log(variables);
            
    }

    // console.log("variables:" + variables);

    useEffect(() => {
        dispatch(listProducts());
        getFilteredProductsGetReq();
        // setFilteredProducts(products);
    }, [dispatch]);

    
    const handleFilters = (category) => {
        // console.log(filters);

        // const newFilters = { ...currentfilters };
        

        
        let newFilters = [];
        
        if(currentfilters.includes(category)) {
            let index = currentfilters.indexOf(category);
            newFilters = currentfilters.splice(index, 1);
            setFilters(currentfilters => currentfilters.splice(index, 1));
            console.log("current handle " + currentfilters);
        }
        
        else {
            newFilters = currentfilters.concat(category);
            
            setFilters(currentfilters => currentfilters.concat(category));
            console.log("new Filters:" + newFilters);
        }
        

        getFilteredProducts({"filters": newFilters});

        if(newFilters == []) {
            setFilters([]);
            getFilteredProductsGetReq();
            // setFilteredProducts(initialProducts);
            // console.log("My items:" + setFilteredProducts(products));
            return;
            
        }
        
        console.log("get filterd " + filteredProducts);
        // setFilteredProducts(getFilteredProducts);

        // currentfilters = currentfilters.concat(category);
        // console.log(currentfilters);

        

        // setFilteredProducts( products.filter((product) => {
        //     return currentfilters.includes(product.category); 
        // }))

        console.log(filteredProducts);
    }

    return (
        <div className="container-fluid" id="filterProducts">
            <div className="row">
                <div className="col-md-8 Filter" id="filtercheckbox" style={{paddingLeft: "55px"}}>
                    <CheckboxFilter
                        handleFilters={handleFilters}    
                    />
                </div>
                <div className="col-md-4 Filter">
                    <div className="input-group rounded" id="searchDiv">
                        <input type="search" className="form-control rounded" id="searchBox" placeholder="Search" aria-label="Search"
                            aria-describedby="search-addon" onChange={(event) => {setSearchTerm(event.target.value);}} />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div >
                {
                    loading ? <h2 style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>Loading ...</h2> : 
                    error ? <h2 style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>{error}</h2> : 
                    
                    // filteredProducts.map((product) => (
                    //     <label>{product.name}</label>
                    // )),

                    filteredProducts.filter((product) => {
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
        </div>
    )
}


export default GuitarList
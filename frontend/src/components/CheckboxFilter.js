import React, { Fragment, useState } from "react";
import Product from './Product';
import { getProducts as listProducts } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const CheckboxFilter = (props) => {
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    const [Checked, setChecked] = useState([]);

    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if(currentIndex === -1) {
            newChecked.push(value)
        }
        else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked);
        props.handleFilters(value);
    }

    const categories = [];

    for (const [key, value] of Object.entries(products)) {
        categories.push(value.category);
    }

    const uniqueCategories = Array.from(new Set(categories));

    return (
        <div className="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" id="collapsableBtn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <i className="fa fa-filter"></i>Click To Filter Items By Category
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne">
                    <div className="card-body">
                        {/* <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="guitarInstCheck" value="option1" onChange />
                            <label className="form-check-label" htmlFor="guitarInstCheck">Guitar Instruments</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="pianoInstCheck" value="option2" onChange />
                            <label className="form-check-label" htmlFor="pianoInstCheck">Piano Instruments</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="drumsInstCheck" value="option3" onChange />
                            <label className="form-check-label" htmlFor="drumsInstCheck">Drums Instruments</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="guitarAccessCheck" value="option1" onChange />
                            <label className="form-check-label" htmlFor="guitarAccessCheck">Guitar Accessories</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="pianoAccessCheck" value="option2" onChange />
                            <label className="form-check-label" htmlFor="pianoAccessCheck">Piano Accessories</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="drumsAccessCheck" value="option3" onChange />
                            <label className="form-check-label" htmlFor="drumsAccessCheck">Drums Accessories</label>
                        </div> */}

                        {
                            uniqueCategories.map((value, index) => (
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="drumsAccessCheck" checked={Checked.indexOf(value) === -1 ? false : true} onChange={() => handleToggle(value)} />
                                    <label className="form-check-label" htmlFor="drumsAccessCheck">{value}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CheckboxFilter
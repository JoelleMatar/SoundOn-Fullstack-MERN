import React, { Fragment } from "react";
import Product from './Product';
import { getProducts as listProducts } from "../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const CheckboxFilter = () => {
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div className="accordion">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                        <button className="btn btn-link" id="collapsableBtn" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Filter Items by Category and Price
                        </button>
                    </h5>
                </div>
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
                    <div class="card-body">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="guitarInstCheck" value="option1" />
                            <label class="form-check-label" for="guitarInstCheck">Guitar Instruments</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="pianoInstCheck" value="option2" />
                            <label class="form-check-label" for="pianoInstCheck">Piano Instruments</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="drumsInstCheck" value="option3" />
                            <label class="form-check-label" for="drumsInstCheck">Drums Instruments</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="guitarAccessCheck" value="option1" />
                            <label class="form-check-label" for="guitarAccessCheck">Guitar Accessories</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="pianoAccessCheck" value="option2" />
                            <label class="form-check-label" for="pianoAccessCheck">Piano Accessories</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="drumsAccessCheck" value="option3" />
                            <label class="form-check-label" for="drumsAccessCheck">Drums Accessories</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckboxFilter
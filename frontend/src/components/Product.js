import React from 'react';
import Guitar from '../images/guitarSet.jpg';
import { Link } from 'react-router-dom';

const Product = ({imageUrl, name, price, description, productId}) => {
    return (
        <div>
            <section>
                <div  id="guitarList">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <div className="productBox">
                            <div className="productBox-content product-box">
                                <div className="product-image">
                                    <img src={imageUrl} className="productImages" alt={name} />
                                </div>
                                <div className="product-desc">
                                    <span className="product-price">
                                        ${price}
                                    </span>
                                    <div className="row justify-content-center">
                                        <p className="product-name">{name}</p>
                                    </div>
                                    <div className="row">
                                        <p className="product-desc-info">{description.substring(0, 100)}...</p>
                                    </div>
                                    <div className="row">
                                        <Link to={`/product/${productId}`} className="btn btn-outline btn-primary viewDetail">Details <i className="fa fa-long-arrow-right"></i> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Product
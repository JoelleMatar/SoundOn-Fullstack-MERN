import React from 'react';
import Guitar from '../images/guitarSet.jpg';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <section>
                <div  id="guitarList">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6">
                        <div className="productBox">
                            <div className="productBox-content product-box">
                                <div className="product-image">
                                    <img src="https://cdn.mos.cms.futurecdn.net/mLyk54LhkcuvqaLMVULcj7-970-80.jpg.webp" className="productImages" alt="guitar1" />
                                </div>
                                <div className="product-desc">
                                    <span className="product-price">
                                        $200
                                    </span>
                                    <div className="row justify-content-center">
                                        <p className="product-name"> Gibson</p>
                                    </div>
                                    <div className="row">
                                        <p className="product-desc-info">The Squier Bullet Mustang features a slightly smaller scale length which, combined with the basswood body, make it easy to get to grips with. But, importantly, its double humbuckers ensure it can keep up with most grown-up guitars.</p>
                                    </div>
                                    <div className="row">
                                        <Link to={`/product/${1111}`} className="btn btn-outline btn-primary viewDetail">Details <i className="fa fa-long-arrow-right"></i> </Link>
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
import React, { Component } from 'react';

const ProductInfo = () => {
    return (
        <div className="container productsInfo">
            {/* <div className=""> */}
                <div className="row productInfo-left">
                    <div className="col-sm-6 col-xs-12 image-left">
                        <img src="https://cdn.mos.cms.futurecdn.net/mLyk54LhkcuvqaLMVULcj7-970-80.jpg.webp" className="productImages" alt="guitar1" />
                    </div>
                    <div className="col-sm-6 col-xs-12 info-left">
                        <p className="name-left">Gibson</p>
                        <p className="info-left-desc">Description: The Squier Bullet Mustang features a slightly smaller scale length which, combined with the basswood body, make it easy to get to grips with. But, importantly, its double humbuckers ensure it can keep up with most grown-up guitars.</p>
                        <hr />
                        <div className="info-right">
                            <p>
                                Price: <span>200$</span>
                            </p><hr />
                            <p>
                                Status: <span>In Stock</span>
                            </p><hr />
                            <p>
                                Quantity:
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </p><hr />
                            <p className="addtocart-product">
                                <button type="button">Add To Cart <i className="fa fa-shopping-cart"></i></button>
                            </p>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    )
}

export default ProductInfo;
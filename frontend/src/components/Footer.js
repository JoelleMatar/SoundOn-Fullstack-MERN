import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <br /><br />
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="linksFooter col-md-4 col-sm-4 hidden-xs">
                            <h3>Links</h3>
                            <h4>
                                <li><Link to="/GuitarList">Shop</Link></li>
                                {/* <li><Link to="/AccessoriesCategories">Accessories</Link></li> */}
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </h4>
                        </div>
                        <div className="contactFooter col-md-4 col-sm-4 col-xs-12">
                            <h3>Contact Us</h3>
                            <address>
                                Sin el Fil,<br />
                                Jisr el Bacha,<br />
                                Lebanon<br />
                                <label>Phone: +961 81 242 992</label><br />
                                <label>Mail: <Link to="/soundon@hotmail.com">soundon@hotmail.com</Link></label>
                            </address>
                        </div>
                        <div className="memberFooter col-md-4 col-sm-4 hidden-xs">
                            <h3>Membership</h3>
                            <h4>
                                <li><Link to="/login">Login | Sign Up</Link></li>
                                {/* <li><a href="login.html">Login</a></li>  */}
                            </h4>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
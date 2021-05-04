import React, { Component } from 'react';
import SoundOn_Logo1 from '../images/SoundOn_Logo1.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                 <header className="header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <Link to="/" className="navbar-brand">
                                <img src={SoundOn_Logo1} alt="Work It Up" />
                            </Link>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#ulContent" aria-controls="ulContent" aria-expanded="false" aria-label="Toggle nav"><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse pr-5" id="ulContent">
                                <ul className="navbar-nav ml-auto" id="nav-ul">
                                    <li className="nav-item px-2"><NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink></li>
                                    <li className="nav-item px-2"><NavLink exact to="/instrumentsCategories" className="nav-link" activeClassName="active">Instruments</NavLink></li>
                                    <li className="nav-item px-2"><NavLink exact to="/accessoriesCategories" className="nav-link" activeClassName="active">Accessories</NavLink></li>
                                    <li className="nav-item px-2"><NavLink exact to="/about" className="nav-link" activeClassName="active">About</NavLink></li>
                                    <li className="nav-item px-2"><NavLink exact to="/contact" className="nav-link" activeClassName="active">Contact Us</NavLink></li>
                                    <li className="nav-item px-2"><NavLink exact to="/login" className="nav-link" activeClassName="active">Login | Sign Up</NavLink></li>
                                    <li className="nav-item px-2">
                                        <NavLink exact to="/shoppingCart" className="nav-link" activeClassName="active">
                                            <i className="fa fa-shopping-cart"><span className="cart_badge">0</span></i>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar;
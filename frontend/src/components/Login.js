import React, { Component } from 'react';
// import '../LoginCss.css';
import LoginImg from '../images/loginImg.jpg';
import loginBodyBg from '../images/loginBg.jpg';
import { Link, withRouter } from 'react-router-dom';
import { SlideDown } from 'react-slidedown';
import SignUp from './SignUp';
import { connect } from 'react-redux';
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import PropTypes from "prop-types";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userLogin.isAuthenticated) {
            this.props.history.push("/shoppingCart"); // push user to shoppingcart when they login
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.userLogin.isAuthenticated) {
            this.props.history.push("/shoppingCart");
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData, this.props.history.push("/shoppingCart")); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter

        console.log(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div id="loginBodyBg">
                <SlideDown className={'my-dropdown-slidedown'}>
                    <div className="container" id="containerLoginForm">
                        <div className="row" id="login-form">
                            <div className="col-lg-3 col-md-2"></div>
                            <div className="col-lg-6 col-md-8 login-box">
                                <div className="col-lg-12 login-title">
                                    <img src={LoginImg} id="loginImg" alt="Artist Image" />
                                    <div className="centeredText">Login To Your Account</div>
                                </div>

                                <div className="col-lg-12 login-form">
                                    <div className="col-lg-12 login-form">
                                        <form noValidate onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <label className="form-control-label" htmlFor="email">EMAIL</label>
                                                <input type="email" className={classnames("", {invalid: errors.email || errors.emailnotfound}),"form-control inputEmail email"} id="email" onChange={this.onChange} value={this.state.email} error={errors.email} />
                                                <span className="red-text">{errors.email}{errors.emailnotfound}</span>
                                            </div>
                                            <div className="form-group" style={{ marginBottom: "20px" }}>
                                                <label className="form-control-label" htmlFor="password">PASSWORD</label>
                                                <input type="password" className={classnames("", {invalid: errors.password || errors.passwordincorrect}),"form-control inputPassword password"} id="password" onChange={this.onChange} value={this.state.password} error={errors.password} />
                                                <span className="red-text">{errors.password}{errors.passwordincorrect}{console.log(errors.password)}</span>
                                            </div>

                                            <div className="col-lg-12">
                                                <label style={{ color: "honeydew", fontSize: "14px" }}>
                                                    <input type="checkbox" name="remember" id="rememberMe" />
                                                    Remember Me
                                                </label>
                                                <div style={{ color: "honeydew", fontSize: "14px" }} id="signupClick">Don't Have An Account?
                                                    <Link to="/register" > Click To Register</Link>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 loginbttm">
                                                <div className="col-lg-6 login-btm login-text">
                                                    {/* Error Message  */}
                                                </div>
                                                <div className="col-lg-12 login-btm login-button">
                                                    <button type="submit" className=" btn btn-outline-primary">LOGIN</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-2"></div>
                            </div>
                        </div>
                    </div> 
                </SlideDown>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    userLogin: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    userLogin: state.userLogin,
    errors: state.errors
});

export default connect( mapStateToProps, { loginUser } )(Login);


// export default Login
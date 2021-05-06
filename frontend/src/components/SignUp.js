import React, { Component } from 'react';
// import '../LoginCss.css';
import LoginImg from '../images/loginImg.jpg';
import loginBodyBg from '../images/loginBg.jpg';
import { Link, withRouter } from 'react-router-dom';
import { SlideDown } from 'react-slidedown';
import { connect } from 'react-redux';
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import PropTypes from "prop-types";
// import { Observable } from 'rxjs';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phoneNumber: "",
            age: "",
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    onChange = e => {
        const target = e.target;
        const id = target.id;
        const value = target.value;

        this.setState({ 
            [id]: value
        });

    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            age: this.state.age,
        };

        this.props.registerUser(newUser, this.props.history.push("/login")); 

        console.log(newUser);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="container" id="signUpBodyBg">
                <SlideDown className={'my-dropdown-slidedown'}>
                    {/* Sign Up Form  */}
                    <div className="row" id="signUp-form">
                        <div className="col-lg-3 col-md-2"></div>
                        <div className="col-lg-6 col-md-8 login-box">
                            <div className="col-lg-12 login-title">
                                <img src={LoginImg} id="loginImg" alt="Artist Image" />
                                <div className="centeredText">Create An Account</div>
                            </div>

                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 login-form">
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div className="col-lg-12">
                                            <div className="col-lg-6 form-group">
                                                <label className="form-control-label" htmlFor="firstName">FIRST NAME</label>
                                                <input type="text" className={classnames("", {invalid: errors.firstName}),"form-control inputText firstName"} id="firstName" onChange={this.onChange} value={this.state.firstName} error={errors.firstName}  />
                                                <span className="red-text">{errors.firstName}</span>
                                            </div>
                                            <div className="col-lg-6 form-group" style={{marginBottom: "20px"}}>
                                                <label className="form-control-label" htmlFor="lastName">LAST NAME</label>
                                                <input type="text" className={classnames("", {invalid: errors.lastName}),"form-control inputText lastName"} id="lastName" onChange={this.onChange} value={this.state.lastName} error={errors.lastName} />
                                                <span className="red-text">{errors.lastName}</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="col-lg-6 form-group">
                                                <label className="form-control-label" htmlFor="email">EMAIL</label>
                                                <input type="email" className={classnames("", {invalid: errors.email}),"form-control inputEmail email"} id="email" onChange={this.onChange} value={this.state.email} error={errors.email} />
                                                <span className="red-text">{errors.email}</span>
                                            </div>
                                            <div className="col-lg-6 form-group" style={{marginBottom: "20px"}}>
                                                <label className="form-control-label" htmlFor="password">PASSWORD</label>
                                                <input type="password" className={classnames("", {invalid: errors.password}),"form-control inputPassword password"} id="password" onChange={this.onChange} value={this.state.password} error={errors.password} />
                                                <span className="red-text">{errors.password}</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="col-lg-6 form-group">
                                                <label className="form-control-label" htmlFor="phoneNumber">PHONE NUMBER</label>
                                                <input type="tel" className={classnames("", {invalid: errors.phoneNumber}),"form-control inputTel phoneNumber"} id="phoneNumber" onChange={this.onChange} value={this.state.phoneNumber} error={errors.phoneNumber} />
                                                <span className="red-text">{errors.phoneNumber}</span>
                                            </div>
                                            <div className="col-lg-6 form-group" style={{marginBottom: "20px"}}>
                                                <label className="form-control-label" htmlFor="age">AGE</label>
                                                <input type="text" className={classnames("", {invalid: errors.age}),"form-control inputText age"} id="age" onChange={this.onChange} value={this.state.age} error={errors.age} />
                                                <span className="red-text">{errors.age}</span>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div id="signupClick" style={{ color: "honeydew", fontSize: "14px" }}>Already Have An Account? 
                                                <Link to="/Login" > Click To Login</Link>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 loginbttm">
                                            <div className="col-lg-6 login-btm login-text">
                                                {/* Error Message  */}
                                            </div>
                                            <div className="col-lg-12 login-btm login-button">
                                                <button type="submit" className=" btn btn-outline-primary">SIGN UP</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2"></div>
                        </div>
                    </div>
                </SlideDown>
            </div>
        )
    }
}

SignUp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect( mapStateToProps, { registerUser } )(withRouter(SignUp));
// export default SignUp;
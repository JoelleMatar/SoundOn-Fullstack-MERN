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
            errors: {},
            isLoading: true,
            // token: '',
            signUpError: '',
        };
    }

    // componentDidMount() {
    //     const token = getFromStorage("sound_on");
    //     if (token) {
    //         fetch("/api/users/verify?token=" + token)
    //             .then(res => res.json())
    //             .then(json => {
    //                 if (json.success) {
    //                     this.setState({
    //                         token,
    //                         isLoading: false
    //                     });
    //                 }
    //                 else {
    //                     this.setState({
    //                         isLoading: false,
    //                     })
    //                 }
    //             });
    //     }
    //     else {
    //         this.setState({
    //             isLoading: false,
    //         });
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.userLogin.isAuthenticated) {
    //         this.props.history.push("/shoppingCart"); // push user to shoppingcart when they login
    //     }

    //     if (nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //         console.log(nextProps.errors);
    //     }
    // }

    // componentDidMount() {
    //     // If logged in and user navigates to Login page, should redirect them to shoppingcart
    //     if (this.props.userLogin.isAuthenticated) {
    //         this.props.history.push("/shoppingCart");
    //     }
    // }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };


    onSubmit = (e, history) => {
        e.preventDefault();

        const {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            age: age,
            signUpError: signUpError,
            // token: token
        } = this.state;

        this.setState({
            isLoading: true
        })

        fetch("/api/users/register",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstName: firstName,
                    lastName: lastName,
                    phoneNumber: phoneNumber,
                    age: age,
                }),
            }).then(res => res.json())
            .then(json => {
                if (json.success) {
                    this.setState({
                        signUpError: "Successfully Registered",
                        isLoading: false,
                        email: '',
                        password: '',
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        age: '',
                    });
                    
                }
                else {
                    this.setState({
                        signUpError: "All Fields Should Be Filled",
                        isLoading: false,
                    });
                }
            });

        // this.props.loginUser(userData, history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter

        // console.log(userData);
        this.props.history.push("/login");

    };

    render() {
        // const  {errors}  = this.state;
        const {
            isLoading,
            // token,
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            age,
            signUpError
        } = this.state;

        // if (isLoading) {
        //     return (<div><p style={{ color: "honeydew", fontSize: "50px", textAlign: "center" }}>Loading...</p></div>)
        // }

        // if (!token) {
            return (

                // <div id="loginBodyBg">



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

                                {
                                    (signUpError) ? (
                                        <p style={{ color: "red", fontSize: "40px", textAlign: "center" }}>{signUpError}</p>
                                    ) : (null)
                                }

                                <div className="col-lg-12 login-form">
                                    <div className="col-lg-12 login-form">
                                        <form noValidate onSubmit={this.onSubmit}>
                                            <div className="col-lg-12">
                                                <div className="col-lg-6 form-group">
                                                    <label className="form-control-label" htmlFor="firstName">FIRST NAME</label>
                                                    <input type="text" className="form-control inputText firstName" id="firstName" onChange={this.onChange} value={firstName} />
                                                    {/* <span className="red-text">{errors.firstName}</span> */}
                                                </div>
                                                <div className="col-lg-6 form-group" style={{ marginBottom: "20px" }}>
                                                    <label className="form-control-label" htmlFor="lastName">LAST NAME</label>
                                                    <input type="text" className="form-control inputText lastName" id="lastName" onChange={this.onChange} value={lastName} />
                                                    {/* <span className="red-text">{errors.lastName}</span> */}
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="col-lg-6 form-group">
                                                    <label className="form-control-label" htmlFor="email">EMAIL</label>
                                                    <input type="email" className= "form-control inputEmail email" id="email" onChange={this.onChange} value={email} />
                                                    {/* <span className="red-text">{errors.email}</span> */}
                                                </div>
                                                <div className="col-lg-6 form-group" style={{ marginBottom: "20px" }}>
                                                    <label className="form-control-label" htmlFor="password">PASSWORD</label>
                                                    <input type="password" className="form-control inputPassword password" id="password" onChange={this.onChange} value={password} />
                                                    {/* <span className="red-text">{errors.password}</span> */}
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="col-lg-6 form-group">
                                                    <label className="form-control-label" htmlFor="phoneNumber">PHONE NUMBER</label>
                                                    <input type="tel" className="form-control inputTel phoneNumber" id="phoneNumber" onChange={this.onChange} value={phoneNumber} />
                                                    {/* <span className="red-text">{errors.phoneNumber}</span> */}
                                                </div>
                                                <div className="col-lg-6 form-group" style={{ marginBottom: "20px" }}>
                                                    <label className="form-control-label" htmlFor="age">AGE</label>
                                                    <input type="text" className="form-control inputText age" id="age" onChange={this.onChange} value={age} />
                                                    {/* <span className="red-text">{errors.age}</span> */}
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
        // }
    }
}

SignUp.propTypes = {
    registerUser: PropTypes.func.isRequired,
    userLogin: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    userLogin: state.userLogin,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(SignUp));
// export default SignUp;
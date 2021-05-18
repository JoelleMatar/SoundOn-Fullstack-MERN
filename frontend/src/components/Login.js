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
import { getFromStorage, setInStorage } from "../utils/storage";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: true,
            token: '',
            signInError: '',
        };
    }

    componentDidMount(history) {
        const token = getFromStorage("sound_on");
        // const { token } = obj;
        if(token) {
            fetch("/api/users/verify?token=" + token)
            .then(res => res.json())
            .then(json => {
                if(json.success) {
                    this.setState({
                        token,
                        isLoading: false
                    });
                }
                else {
                    this.setState({
                        isLoading: false,
                    })
                }
            });
            this.props.history.push("/shoppingCart");
        }
        else {
            this.setState({
                isLoading: false,
            });
        }
    }

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
            signInError: signInError,
            token: token
        } = this.state;

        this.setState({
            isLoading: true
        })

        fetch("http://localhost:6500/api/users/login", 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
            }).then(res => res.json())
                .then(json => {
                    // if(json.success) {
                        
                        this.setState({
                            signInError: json.message,
                            isLoading: false,
                    //         email: '',
                    //         password: '',
                    //         token: json.token
                    //     });
                    // }
                    // else {
                    //     this.setState({
                            // signInError: "Incorrect Password",
                            // isLoading: false,
                        });
                    // }
                });

        // this.props.loginUser(userData, history); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter

        // console.log(userData);
        this.props.history.push("/shoppingCart");
    };

    render() {
        // const  {errors}  = this.state;
        const { 
            isLoading,
            token,
            email,
            password,
            signInError
        } = this.state;

        if(isLoading) {
            return (<div><p style={{color: "honeydew", fontSize: "50px", textAlign: "center"}}>Loading...</p></div>)
        }

        if(!token) {
            return (
                
                <div id="loginBodyBg">
                    
                    {
                        (signInError) ? (
                            <p  style={{ color: "honeydew", fontSize: "50px", textAlign: "center"}}>{signInError}</p>
                        ) : (null)
                    }

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
                                                    <input type="email" className="form-control inputEmail email" id="email" onChange={this.onChange} value={email} />
                                                    {/* <span className="red-text">{errors.email}{errors.emailnotfound}</span> */}
                                                </div>
                                                <div className="form-group" style={{ marginBottom: "20px" }}>
                                                    <label className="form-control-label" htmlFor="password">PASSWORD</label>
                                                    <input type="password" className="form-control inputPassword password" id="password" onChange={this.onChange} value={password}  />
                                                    {/* <span className="red-text">{errors.password}{errors.passwordincorrect}</span> */}
                                                </div>

                                                <div className="col-lg-12">
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
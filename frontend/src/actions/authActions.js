import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("http://localhost:6500/api/users/register", userData)
        .then(res => history.push("/login")) // re-direct to login on successful register
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: "Error occured during registration"
            })
        );
};

// Login - get user token
export const loginUser = (userData, history) => dispatch => {
    console.log("insideee ");
    axios
        .post("http://localhost:6500/api/users/login", userData)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
            const { token } = res.userData;
            console.log("loginuser res" + res.userData);
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
            // Go to shopping cart
            history.push("/");
            console.log("in loginuser");
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: "Error occured during login"
            })
        );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
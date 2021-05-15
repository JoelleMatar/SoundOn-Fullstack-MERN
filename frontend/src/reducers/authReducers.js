import { USER_LOGOUT,USER_LOGIN_FAIL,USER_LOGIN_REQUEST,SET_CURRENT_USER, USER_LOADING } from "../actions/types";

const isEmpty = require("is-empty");
const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false
};

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case SET_CURRENT_USER:
//             return {
//                 ...state,
//                 isAuthenticated: !isEmpty(action.payload),
//                 user: action.payload
//             };
//         case USER_LOADING:
//             return {
//                 ...state,
//                 loading: true
//             };
//         default:
//             return state;
//     }
// }

export const authReducers = (state = initialState, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { ...state, loading: true };
      case SET_CURRENT_USER:
        return { ...state, loading: false, user: action.payload };
      case USER_LOGIN_FAIL:
        return { ...state, loading: false, error: action.payload };
      case USER_LOGOUT:
        return {};
        case USER_LOADING:
            return {
                ...state,
                loading: true
            };
      default:
        return state
    }
  }
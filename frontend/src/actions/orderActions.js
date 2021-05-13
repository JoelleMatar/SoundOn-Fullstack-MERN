import * as actionTypes from "../constants/orderConstants";
import axios from "axios";

// export const getOrder = (id) => async (dispatch) => {
//     try {
//         dispatch({type: actionTypes.GET_ORDER_REQUEST});

//         const { data } = await axios.get(`/api/purchase/${id}`);

//         dispatch({
//             type: actionTypes.GET_ORDER_SUCCESS,
//             payload: data
//         })
//     }
//     catch(error) {
//         dispatch({
//             type: actionTypes.GET_ORDER_FAIL,
//             payload: error.response && error.response.data.message
//             ? error.response.data.message
//             : error.message,
//         });
//     }
// };



export const getOrder = (orderData, history) => dispatch => {
    axios
        .post("http://localhost:6500/api/shoppingCart", orderData)
        .then(res => history.push("/")) // re-direct to login on successful register
        .catch(err =>
            dispatch({
                type: actionTypes.GET_ORDER_FAIL,
                payload: "Error occured during purchase"
            })
        );
};
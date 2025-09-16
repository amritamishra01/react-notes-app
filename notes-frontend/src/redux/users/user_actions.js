// import axios from "axios"
// import { LOGIN_USER_ERROR, LOGIN_USER_LOADING, LOGIN_USER_SUCCESS } from "./user_types"
// import { BASE_URL } from "../../constants/config"

// export const getUser = (obj) => async(dispatch) => {
//     dispatch({type: LOGIN_USER_LOADING})
//     try {
//         let data = await axios(BASE_URL+"/user/login", {
//         method: "post",
//         data: obj
//         })
//         let {message, user, token, status} = data.data
//         if(status == 1)
//         dispatch({type: LOGIN_USER_SUCCESS, payload: {user, token}})
//         else
//         {
//             alert(message)
//             dispatch({type: LOGIN_USER_ERROR})
//         }

//     } catch (error) {
//         dispatch({type: LOGIN_USER_ERROR})
//     }
// }



import axios from "axios";
import {
  LOGIN_USER_ERROR,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
} from "./user_types";
import { BASE_URL } from "../../constants/config";

export const getUser = (obj) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_LOADING });
  try {
    let res = await axios.post(`${BASE_URL}/user/login`, obj);

    let { message, user, token, status } = res.data;

    if (status === 1) {
      // ✅ Save token + user in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      // ✅ Dispatch to redux
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user, token } });
    } else {
      alert(message);
      dispatch({ type: LOGIN_USER_ERROR });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: LOGIN_USER_ERROR });
  }
};

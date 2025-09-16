// import axios from "axios"
// import { useSelector } from "react-redux"
// import { store } from "../store"
// import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note_types"
// import { BASE_URL } from "../../constants/config"
// import { LOGOUT } from "../users/user_types"


// // export const getNotes = ()=>async(dispatch)=>{
// //     const {token} = store.getState().userReducer
// //     dispatch({type: GET_NOTES_LOADING})
// //     try {
// //         const res = await axios(BASE_URL+"/note", {
// //             method: "get",
// //             headers: {
// //                 Authorization: token
// //             }
// //         })
// //         const {status, message, data} = res.data
// //         if(status == 1)
// //         dispatch({type: GET_NOTES_SUCCESS, payload: data})
// //         else if(status == 2)
// //         dispatch({type: LOGOUT})
// //         else
// //         dispatch({type: GET_NOTES_ERROR})
// //     } catch (error) {
// //         dispatch({type: GET_NOTES_ERROR})
// //     }
// // }
// export const getNotes = () => async (dispatch) => {
//   const { token } = store.getState().userReducer;
//   dispatch({ type: GET_NOTES_LOADING });
//   try {
//     const res = await axios(BASE_URL + "/note", {
//       method: "get",
//       headers: {
//         Authorization: token,
//       },
//     });

//     const { status, message, data } = res.data;

//     if (status == 1) {
//       // 🧹 Clean notes before saving
//       const cleanData = data.map((note) => ({
//         _id: note._id,
//         title: note.title,
//         body: note.body,
//         // if you want user info, stringify or pick just one field
//         // userEmail: note.user?.email 
//       }));

//       dispatch({ type: GET_NOTES_SUCCESS, payload: cleanData });
//     } else if (status == 2) {
//       dispatch({ type: LOGOUT });
//     } else {
//       dispatch({ type: GET_NOTES_ERROR });
//     }
//   } catch (error) {
//     dispatch({ type: GET_NOTES_ERROR });
//   }
// };


// export const createNotes = (obj)=>async(dispatch)=>{
//     const {token} = store.getState().userReducer
//     dispatch({type: CREATE_NOTES_LOADING})
//     try {
//         const res = await axios(BASE_URL+"/note/create", {
//             method: "post",
//             data: obj,
//             headers: {
//                 Authorization: token
//             }
//         })
//         const {status, message} = res.data
//         if(status == 1)
//         {
//             dispatch({type: CREATE_NOTES_SUCCESS})
//             dispatch(getNotes())
//         }
//         else if(status == 2)
//         dispatch({type: LOGOUT})
//         else
//         dispatch({type: CREATE_NOTES_ERROR})
//     } catch (error) {
//         dispatch({type: CREATE_NOTES_ERROR})
//     }
// }

// export const updateNotes = (id, obj)=>async(dispatch)=>{
//     const {token} = store.getState().userReducer
//     dispatch({type: UPDATE_NOTES_LOADING})
//     try {
//         const res = await axios(BASE_URL+"/note/", {
//             method: "patch",
//             data: obj,
//             headers: {
//                 Authorization: token,
//                 id: id
//             }
//         })
//         const {status, message} = res.data
//         if(status == 1)
//         {
//             dispatch({type: UPDATE_NOTES_SUCCESS})
//             dispatch(getNotes())
//         }
//         else if(status == 2)
//         dispatch({type: LOGOUT})
//         else
//         dispatch({type: UPDATE_NOTES_ERROR})
//     } catch (error) {
//         dispatch({type: UPDATE_NOTES_ERROR})
//     }
// }

// export const deleteNotes = (id)=>async(dispatch)=>{
//     const {token} = store.getState().userReducer
//     dispatch({type: DELETE_NOTES_LOADING})
//     try {
//         const res = await axios(BASE_URL+"/note/", {
//             method: "delete",
//             headers: {
//                 Authorization: token,
//                 id: id
//             }
//         })
//         const {status, message} = res.data
//         if(status == 1)
//         {
//             dispatch({type: DELETE_NOTES_SUCCESS})
//             dispatch(getNotes())
//         }
//         else if(status == 2)
//         dispatch({type: LOGOUT})
//         else
//         dispatch({type: DELETE_NOTES_ERROR})
//     } catch (error) {
//         dispatch({type: DELETE_NOTES_ERROR})
//     }
// }




import axios from "axios";
import { store } from "../store";
import {
  CREATE_NOTES_ERROR,
  CREATE_NOTES_LOADING,
  CREATE_NOTES_SUCCESS,
  DELETE_NOTES_ERROR,
  DELETE_NOTES_LOADING,
  DELETE_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  GET_NOTES_LOADING,
  GET_NOTES_SUCCESS,
  UPDATE_NOTES_ERROR,
  UPDATE_NOTES_LOADING,
  UPDATE_NOTES_SUCCESS,
} from "./note_types";
import { BASE_URL } from "../../constants/config";
import { LOGOUT } from "../users/user_types";

// ================== GET NOTES ==================
export const getNotes = () => async (dispatch) => {
  const { token } = store.getState().userReducer;
  dispatch({ type: GET_NOTES_LOADING });
  try {
    const res = await axios.get(`${BASE_URL}/note`, {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ always prefix with Bearer
      },
    });

    const { status, data } = res.data;

    if (status === 1) {
      const cleanData = data.map((note) => ({
        _id: note._id,
        title: note.title,
        body: note.body,
      }));
      dispatch({ type: GET_NOTES_SUCCESS, payload: cleanData });
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: GET_NOTES_ERROR });
    }
  } catch (error) {
    console.error("GET NOTES ERROR:", error.message);
    dispatch({ type: GET_NOTES_ERROR });
  }
};

// ================== CREATE NOTE ==================
export const createNotes = (obj) => async (dispatch) => {
  const { token } = store.getState().userReducer;
  dispatch({ type: CREATE_NOTES_LOADING });
  try {
    const res = await axios.post(`${BASE_URL}/note/create`, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { status } = res.data;

    if (status === 1) {
      dispatch({ type: CREATE_NOTES_SUCCESS });
      dispatch(getNotes()); // ✅ refresh list
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: CREATE_NOTES_ERROR });
    }
  } catch (error) {
    console.error("CREATE NOTE ERROR:", error.message);
    dispatch({ type: CREATE_NOTES_ERROR });
  }
};

// ================== UPDATE NOTE ==================
export const updateNotes = (id, obj) => async (dispatch) => {
  const { token } = store.getState().userReducer;
  dispatch({ type: UPDATE_NOTES_LOADING });
  try {
    const res = await axios.patch(`${BASE_URL}/note/${id}`, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { status } = res.data;

    if (status === 1) {
      dispatch({ type: UPDATE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: UPDATE_NOTES_ERROR });
    }
  } catch (error) {
    console.error("UPDATE NOTE ERROR:", error.message);
    dispatch({ type: UPDATE_NOTES_ERROR });
  }
};

// ================== DELETE NOTE ==================
export const deleteNotes = (id) => async (dispatch) => {
  const { token } = store.getState().userReducer;
  dispatch({ type: DELETE_NOTES_LOADING });
  try {
    const res = await axios.delete(`${BASE_URL}/note/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { status } = res.data;

    if (status === 1) {
      dispatch({ type: DELETE_NOTES_SUCCESS });
      dispatch(getNotes());
    } else if (status === 2) {
      dispatch({ type: LOGOUT });
    } else {
      dispatch({ type: DELETE_NOTES_ERROR });
    }
  } catch (error) {
    console.error("DELETE NOTE ERROR:", error.message);
    dispatch({ type: DELETE_NOTES_ERROR });
  }
};

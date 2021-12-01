import {
    GET_ALL_USERS, SET_LOADING
} from "./types";
import axios from "axios";

const getUsers = (users) => ({
    type: GET_ALL_USERS,
    payload: users
});

const isLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading
});

export const loadUsers = () => {
    setLoading(true);
    return function (dispatch) {
        console.log(`${process.env.REACT_APP_API}`);
        axios.get(`https://reqres.in/api/users?page=1`).then((response) => {
            console.log("response:: " + response);
            setLoading(false);
            dispatch(getUsers(response.data));
        }).catch((error) => {console.log(error)});
    }
}

export const setLoading = (loading) => {
    return function (dispatch) {
        dispatch(isLoading(loading));
    }
}
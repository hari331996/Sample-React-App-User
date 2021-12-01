

import { GET_ALL_USERS,SET_LOADING } from "../types";

const initialStateUsers = {
    users: [],
    loading: true
}

const userReducers = (state = initialStateUsers, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}

export default userReducers;



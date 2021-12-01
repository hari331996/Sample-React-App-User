import { combineReducers } from "redux";
import userReducers from "./user-reducer";

const rootReducer = combineReducers({
    users: userReducers
})

export default rootReducer;
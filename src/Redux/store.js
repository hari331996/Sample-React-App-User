import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./Reducers/root-reducer";

const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

// const store = createStore(rootReducer, applyMiddleware(...middlewares),
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middlewares)
  ));

export default store;
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

// Reducers
import homeReducer from "./reducers/homeReducer";
import aboutReducer from "./reducers/aboutReducer";

const rootReducers = combineReducers({
  home: homeReducer,
  about: aboutReducer
});

export const makeStore = (initialState, options) => {
  return createStore(
    rootReducers,
    initialState,
    process.env.NODE_ENV === "development"
      ? composeWithDevTools(
          applyMiddleware(
            thunkMiddleware,
            process.env.NODE_ENV === "development" ? logger : null
          )
        )
      : applyMiddleware(thunkMiddleware)
  );
};

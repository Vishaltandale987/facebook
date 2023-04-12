// TODO: use this store variable to create a store.

import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userAuthReducer } from "./userAuth/userAuth.reducer";

// Note: you can delete the line below, but remember to create a new store variable
const rootReducer=combineReducers({

  userMangerdata:userAuthReducer,
 
})


const createComposer=window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)));





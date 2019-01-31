
/**
 * Store For the entire Project using Redux
 */

import {createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import loginReducer from "./reducers/loginReducer"; //login reducer that to be added to the Store

// const mylogger = (store)=>(next)=>(action)=>{
//     console.log("inMiddleware");
//     next(action);
// }

export default createStore(
    combineReducers({loginReducer}),//can also add multiple reducers here
    {},
    applyMiddleware(logger) //middleware to run before the action
)
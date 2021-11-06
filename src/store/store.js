import React from "react"
import { createStore, applyMiddleware } from 'redux'
import reducer from "./reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import initialState from "./initialState";

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default props => <Provider store={store} {...props}/>;
import {createStore , applyMiddleware} from "redux"
import MelakuReducer from "./reducers"
import Watson from "./middlewares"

import createSaga from "redux-saga"
import RootSaga from "./sagas"

var sagaMiddleware =  createSaga()


var store  =  createStore(MelakuReducer, applyMiddleware(Watson, sagaMiddleware))

sagaMiddleware.run(RootSaga)



export default store
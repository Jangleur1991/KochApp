import {combineReducers} from "redux"
import {createStore} from "redux"
import {loginreducer} from "./reducer/loginreducer"

const allReducers = combineReducers({
    loginState: loginreducer,
})

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


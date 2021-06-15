import {SET_KEEP_LOGGED_IN, SET_PASSWORD, SET_USERNAME} from "../actions/actionTypes";

const initState = Object.freeze({
    username: '',
    password: '',
    keepLoggedIn: false
})

const reducerActions = Object.freeze({
    [SET_USERNAME]: (state, action) => ({...state, username: action.username}),
    [SET_PASSWORD]: (state, action) => ({...state, password: action.password}),
    [SET_KEEP_LOGGED_IN]: (state, action) => ({...state, keepLoggedIn: action.keepLoggedIn})
})

export const loginreducer = (state = initState, action) =>
    reducerActions.hasOwnProperty(action.type)
        ? reducerActions[action.type](state, action)
        : state
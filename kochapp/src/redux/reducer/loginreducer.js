import {SET_KEEP_LOGGED_IN, SET_PASSWORD, SET_USERNAME} from "../actions/actionTypes";

const initState = Object.freeze({
    username: '',
    password: '',
    keepLoggedIn: false
})

const reducerActions = Object.freeze({
    [SET_USERNAME]: (state, {username}) => ({...state, username}),
    [SET_PASSWORD]: (state, {password}) => ({...state, password}),
    [SET_KEEP_LOGGED_IN]: (state, {keepLoggedIn}) => ({...state, keepLoggedIn})
})

export const loginreducer = (state = initState, action) =>
    reducerActions.hasOwnProperty(action.type)
        ? reducerActions[action.type](state, action)
        : state
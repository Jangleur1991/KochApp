import {SET_KEEP_LOGGED_IN, SET_PASSWORD, SET_USERNAME} from "./actionTypes";

export const setUsername = (username) => ({
    type: SET_USERNAME,
    username
})

export const setPassword = (password) => ({
    type: SET_PASSWORD,
    password
})

export const setKeepLoggedIn = (keepLoggedIn) => ({
    type: SET_KEEP_LOGGED_IN,
    keepLoggedIn
})
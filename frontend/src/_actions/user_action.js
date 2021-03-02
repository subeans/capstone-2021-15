import axios from 'axios';
import { SIGNIN_USER, SIGNUP_USER, AUTH_USER } from './types';

export function signInUser(dataToSubmit) {

    const request = axios.post('/user/signIn', dataToSubmit)
        .then( response => response.data )

    return {
        type: SIGNIN_USER,
        payload: request
    }
}

export function signUpUser(dataToSubmit) {

    const request = axios.post('/user/signUp', dataToSubmit)
        .then( response => response.data )

    return {
        type: SIGNUP_USER,
        payload: request
    }
}

export function auth() {

    const request = axios.get('/user/auth')
        .then( response => response.data )

    return {
        type: AUTH_USER,
        payload: request
    }
}
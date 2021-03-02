import { SIGNIN_USER, SIGNUP_USER, AUTH_USER}  from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case SIGNIN_USER:
            return { ...state, loginSuccess: action.payload } // backend 서버에서 보낸 것이 action.payload에
            break;
    
        case SIGNUP_USER:
            return { ...state, signUp: action.payload }
                
        case AUTH_USER:
            return { ...state, userData: action.payload }
        default:
            return state;
    }

}
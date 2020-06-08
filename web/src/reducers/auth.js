import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, LOGOUT } from '../actions/auth';

export default function auth(state = {
    isRequesting: false,
    isLoggedIn: false,
    hasFailed: false,
    user: {}
}, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isRequesting: true,
                isLoggedIn: false,
                hasFailed: false,
                user: {}
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isRequesting: false,
                isLoggedIn: true,
                hasFailed: false,
                user: {
                    username: action.payload.user,
                }
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isRequesting: false,
                isLoggedIn: false,
                hasFailed: true,
                user: {}
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                isRequesting: false,
                hasFailed: false,
                user: {}
            }
        default:
            return state;
    }
}
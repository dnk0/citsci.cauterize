import AuthService from '../services/service.auth';

export const LOGIN_REQUEST = "AUTH/LOGIN_REQUEST";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const REGISTER_REQUEST = "AUTH/REGISTER_REQUEST";
export const REGISTER_SUCCESS = "AUTH/REGISTER_SUCCESS";
export const LOGOUT = "AUTH/LOGOUT";


export function loginSuccessEvent(user) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            user
        }
    };
}

export function loginFailureEvent(err) {
    return {
        type: LOGIN_FAILURE
    };
}

export function loginRequestEvent() {
    return {
        type: LOGIN_REQUEST
    };
}

export function logoutEvent() {
    return {
        type: LOGOUT
    };
}
/*
export function register() {
    return (dispatch: Dispatch, getState: GetState) => {
        const { counter } = getState();

        if (counter % 2 === 0) {
            return;
        }

        dispatch(increment());
    };
}
*/

export function update() {
    return (dispatch) => {
        if (AuthService.keepLoggedIn()) {
            if (AuthService.isLoggedIn()) {
                dispatch(loginSuccessEvent(AuthService.getCurrentUser()))
            } else {
                //dispatch(loginFailureEvent())
            }
        }
    }
}

export function login(username, password, keepLoggedIn) {
    return (dispatch) => {
        if (username.length > 0 && password.length > 0) {
        dispatch(loginRequestEvent())
        AuthService.login(username, password).then(data => {
            AuthService.setKeepLoggedIn(keepLoggedIn)
            dispatch(loginSuccessEvent(AuthService.getCurrentUser()))
        }).catch(err => {
            dispatch(loginFailureEvent(err))
        });
        }
    };
}

export function logout() {
    return (dispatch) => {
        AuthService.logout()
        dispatch(logoutEvent())
    }
}

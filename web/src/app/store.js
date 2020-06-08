import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../reducers/auth';
import ThunkMiddleware from 'redux-thunk'

export default configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: [
        ThunkMiddleware
    ]

});

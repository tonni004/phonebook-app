import { token, register, login, logout, currentUser } from '../../api/auth-api';

import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    logoutRequest,
    logoutSuccess,
    logoutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError,
} from './auth-actions';
import ErrorNotification from 'components/ErrorNotification';

export const registerUser = ({ name, email, password }) => async dispatch => {
    dispatch(registerRequest())

    const user = {
        name: name,
        email: email,
        password: password,
    }

    try {
        const resporse = await register(user);
        token.set(resporse.token)
        dispatch(registerSuccess(resporse));
    } catch (error) {
        const errorMessage = 'The form was not submitted properly. Try again!';
        ErrorNotification(errorMessage)
        dispatch(registerError(error.message))
    }
}

export const loginUser = ({ email, password }) => async dispatch => {
    dispatch(loginRequest())
    const user = {
        email: email,
        password: password,
    }

    try {
        const resporse = await login(user);
        token.set(resporse.token)
        dispatch(loginSuccess(resporse));
    } catch (error) {
        const errorMessage = 'Your password or login is incorrect. Try again!';
        ErrorNotification(errorMessage)
        dispatch(loginError(error.message))
    }
}

export const logoutUser = () => async dispatch => {
    dispatch(logoutRequest())

    try {
        await logout();
        token.unset()
        dispatch(logoutSuccess());
    } catch (error) {
        const errorMessage = 'Something went wrong. Wait a minute or two and try again!';
        ErrorNotification(errorMessage);
        dispatch(logoutError(error.message))
    }
}

export const getCurrentUser = () => async (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }

    token.set(persistedToken);

    dispatch(getCurrentUserRequest())

    try {
        const response = await currentUser();
        dispatch(getCurrentUserSuccess(response));
    } catch (error) {
        const errorMessage = 'Something went wrong. Wait a minute or two and try again!';
        // ErrorNotification(errorMessage)
        dispatch(getCurrentUserError(error.message))
    }
}
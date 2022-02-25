import axios from 'axios';
import * as types from './types';
import history from './history';
import { useNavigate } from 'react-router-dom';
export const handleLogin = async (dispatch, values) => {
    try {
        dispatch({ type: types.LOADING, payload: true });
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL_API}/auth/login`, values);
        const { data } = response;
        localStorage.setItem('token', JSON.stringify(data.token));
        localStorage.setItem('user', JSON.stringify(data.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        dispatch({ type: types.AUTHENTICATE_USER, payload: data.user });
        history.push('/');
    } catch (err) {
        const {
            response: {
                data: { error },
                status,
            },
        } = err;
        if (status === 404 || status === 422) {
            dispatch({ type: types.EMAIL_OR_PASSWORD_ERROR, payload: error });
        }
    }
    dispatch({ type: types.LOADING, payload: false });
};

export const handleRegister = async (dispatch, values, navigateTo) => {
    try {
        dispatch({ type: types.LOADING, payload: true });
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL_API}/auth/register`, values);
        const { data } = response;
        navigateTo();
        dispatch({ type: types.CREATED_USER_SUCCESS, payload: data.message });
    } catch (err) {
        const {
            response: {
                data: { error },
                status,
            },
        } = err;
        if (status === 404 || status === 422) {
            dispatch({ type: types.EMAIL_OR_PASSWORD_ERROR, payload: error });
        }
    }
    dispatch({ type: types.LOADING, payload: false });
};

export const handleLogout = async (dispatch) => {
    dispatch({ type: types.LOGOUT_USER, payload: false });
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = undefined;
    history.push('/login');
};
export const checkToken = (dispatch) => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
        dispatch({ type: types.AUTHENTICATE_USER, payload: user });
    }
    dispatch({ type: types.LOADING_SUCCESS, payload: false });
};

export const resetMessage = (dispatch) => {
    dispatch({ type: types.EMAIL_OR_PASSWORD_ERROR, payload: '' });
    dispatch({ type: types.CREATED_USER_SUCCESS, payload: '' });
};

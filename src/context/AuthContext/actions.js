import axios from 'axios';
import * as types from './types';
import history from './history';
export const handleLogin = async (dispatch) => {
    const values = {
        password: '123',
        email: 'gui@gmail.com',
    };
    try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL_API}/auth/login`, values);
        const { data } = response;
        console.log(data);
        localStorage.setItem('token', JSON.stringify(data.token));
        console.log(data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        dispatch({ type: types.AUTHENTICATE_USER });
        history.push('/home');
    } catch (err) {
        const {
            response: {
                data: { error },
            },
        } = err;
        console.log(error);
    }
};

export const handleLogout = async (dispatch) => {
    dispatch({ type: types.LOGOUT_USER, payload: false });
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = undefined;
    history.push('/login');
};
export const checkToken = (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
        dispatch({ type: types.FOUND_TOKEN });
    }
    return dispatch({ type: types.LOADING_SUCCESS, payload: false });
};

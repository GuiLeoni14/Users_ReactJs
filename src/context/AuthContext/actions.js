import axios from 'axios';
import * as types from './types';
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
        return dispatch({ type: types.AUTHENTICATE_USER, payload: data });
    } catch (err) {
        const {
            response: {
                data: { error },
            },
        } = err;
        console.log(error);
    }
};

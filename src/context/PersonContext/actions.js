import * as types from './types';
import axios from 'axios';
import history from '../AuthContext/history';
export const loadPerson = async (dispatch) => {
    dispatch({ type: types.LOADING_PERSON, payload: true });
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_URL_API}/person`);
        dispatch({ type: types.LOAD_PERSON, payload: data });
    } catch (err) {
        const {
            response: {
                data: { error },
                status,
            },
        } = err;
        dispatch({ type: types.ERROR_PERSON, error: error });
    }
    dispatch({ type: types.LOADING_PERSON, payload: false });
};

export const addPerson = async (dispatch, values) => {
    dispatch({ type: types.LOADING_PERSON, payload: true });
    try {
        console.log(values);
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_URL_API}/person`, values);
        const { data } = response;
        await loadPerson(dispatch);
        history.push('/');
        dispatch({ type: types.ADD_PERSON, payload: data.message });
    } catch (err) {
        const {
            response: {
                data: { error },
                status,
            },
        } = err;
        dispatch({ type: types.ERROR_PERSON, payload: error });
    }
    dispatch({ type: types.LOADING_PERSON, payload: false });
};

export const deletePerson = async (dispatch, id) => {
    dispatch({ type: types.LOADING_PERSON, payload: true });
    try {
        await axios.delete(`${import.meta.env.VITE_REACT_APP_URL_API}/person/${id}`);
        await loadPerson(dispatch);
    } catch (err) {
        const {
            response: {
                data: { error },
                status,
            },
        } = err;
        dispatch({ type: types.ERROR_PERSON, payload: error });
    }
    dispatch({ type: types.LOADING_PERSON, payload: false });
};

export const editPerson = async (dispatch, values) => {
    dispatch({ type: types.LOADING_PERSON, payload: true });
    try {
        await axios.patch(`${import.meta.env.VITE_REACT_APP_URL_API}/person/${values.id}`, values);
        await loadPerson(dispatch);
    } catch (err) {
        const {
            response: {
                data: { error },
                status,
            },
        } = err;
        dispatch({ type: types.ERROR_PERSON, payload: error });
    }
    dispatch({ type: types.LOADING_PERSON, payload: false });
};

export const resetMessagesPerson = (dispatch) => {
    dispatch({ type: types.ERROR_PERSON, payload: '' });
    dispatch({ type: types.ADD_PERSON, payload: '' });
};

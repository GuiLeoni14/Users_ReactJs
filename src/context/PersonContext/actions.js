import * as types from './types';
import axios from 'axios';
export const loadPerson = async (dispatch) => {
    try {
        const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_URL_API}/person`);
        dispatch({ type: types.LOAD_PERSON, payload: data });
    } catch {
        dispatch({ type: types.ERROR_PERSON });
    }
};

export const addPerson = async (dispatch, values) => {
    try {
        console.log(values);
        await axios.post(`${import.meta.env.VITE_REACT_APP_URL_API}/person`, values);
        loadPerson(dispatch);
    } catch (err) {
        const {
            response: {
                data: { error },
                status,
            },
        } = err;
        dispatch({ type: types.ERROR_PERSON, payload: error });
    }
    dispatch({ type: types.ADD_PERSON });
};

export const deletePerson = (dispatch, id) => {
    try {
        const beforeStorage = JSON.parse(localStorage.getItem('persons'));
        const afterPerson = beforeStorage.filter((dev) => dev.id != id);
        localStorage.setItem('persons', JSON.stringify(afterPerson));
        loadPerson(dispatch);
        dispatch({ type: types.DELETE_PERSON, payload: afterPerson });
    } catch {
        dispatch({ type: types.ERROR_PERSON });
    }
};

export const editPerson = (dispatch, values) => {
    try {
        const beforeStorage = JSON.parse(localStorage.getItem('persons'));
        const newStorage = beforeStorage.filter((item) => item.id != values.id);
        localStorage.setItem('persons', JSON.stringify([...newStorage, values]));
        loadPerson(dispatch);
        const afterPerson = JSON.parse(localStorage.getItem('persons'));
        dispatch({ type: types.DELETE_PERSON, payload: afterPerson });
    } catch {
        dispatch({ type: types.ERROR_PERSON });
    }
};
export const getStatusForGitHub = async (userName) => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then((resp) => resp.json())
        .then((data) => data);
};

import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.LOADING_PERSON:
            return { ...state, loading: action.payload };
        case types.LOAD_PERSON:
            return { ...state, persons: action.payload, error: false };
        case types.ADD_PERSON:
            return { ...state, error: false };
        case types.ERROR_PERSON:
            return { ...state, error: action.payload };
    }
    return { ...state, error: false };
};

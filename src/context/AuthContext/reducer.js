import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.AUTHENTICATE_USER:
            return { ...state, authenticated: true };
        case types.LOGOUT_USER:
            return { ...state, authenticated: action.payload };
        case types.CHECK_TOKEN:
            return { ...state, authenticated: true };
        case types.LOADING_SUCCESS:
            return { ...state, loading: action.payload };
    }
    return { ...state };
};

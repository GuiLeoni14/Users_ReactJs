import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.AUTHENTICATE_USER:
            return { ...state, authenticated: action.payload };
        case types.LOGOUT_USER:
            return { ...state, authenticated: action.payload };
        case types.LOADING_SUCCESS:
            return { ...state, loading: action.payload };
        case types.EMAIL_OR_PASSWORD_ERROR:
            return { ...state, loginAndRegisterErr: action.payload };
        case types.CREATED_USER_SUCCESS:
            return { ...state, messageSuccess: action.payload };
    }
    return { ...state };
};

import * as types from './types';
export const reducer = (state, action) => {
    switch (action.type) {
        case types.AUTHENTICATE_USER:
            return { ...state, authenticated: true, token: action.token };
    }
    return { ...state };
};

import { AuthContext } from './context';
import P from 'prop-types';
import { useEffect, useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';
import axios from 'axios';
import { checkToken } from './actions';
export default function AuthProvider({ children }) {
    const [stateAuth, setStateAuth] = useReducer(reducer, data);
    useEffect(() => {
        checkToken(setStateAuth);
    }, []);
    return <AuthContext.Provider value={{ stateAuth, setStateAuth }}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: P.node,
};

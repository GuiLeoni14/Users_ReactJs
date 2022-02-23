import { AuthContext } from './context';
import P from 'prop-types';
import { useReducer } from 'react';
import { reducer } from './reducer';
import { data } from './data';
export default function AuthProvider({ children }) {
    const [stateAuth, setStateAuth] = useReducer(reducer, data);
    return <AuthContext.Provider value={{ stateAuth, setStateAuth }}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: P.node,
};

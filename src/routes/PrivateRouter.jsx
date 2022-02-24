import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/context';
import { useContext } from 'react';
import P from 'prop-types';
export default function PrivateRouter({ children, redirectTo }) {
    const {
        stateAuth: { authenticated, loading },
        setStateAuth,
    } = useContext(AuthContext);
    return authenticated ? children : <Navigate to={redirectTo} />;
}
PrivateRouter.propTypes = {
    children: P.node,
    redirectTo: P.string,
};

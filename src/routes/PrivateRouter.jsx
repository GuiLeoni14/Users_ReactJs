import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext/context';
import { useContext, useEffect } from 'react';
import P from 'prop-types';
import { checkToken } from '../context/AuthContext/actions';
import Loading from '../components/Loading';
export default function PrivateRouter({ children, redirectTo }) {
    const {
        stateAuth: { authenticated, loading },
        setStateAuth,
    } = useContext(AuthContext);
    useEffect(() => {
        checkToken(setStateAuth);
    }, [setStateAuth]);

    if (loading) {
        return <Loading />;
    }
    return authenticated ? children : <Navigate to={redirectTo} />;
}
PrivateRouter.propTypes = {
    children: P.node,
    redirectTo: P.string,
};

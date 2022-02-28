import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/context';
import { checkToken } from '../context/AuthContext/actions';
import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRouter from './PrivateRouter';
import NotFound from '../pages/NotFound';
export default function MyRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PrivateRouter redirectTo="/login">
                        <Home />
                    </PrivateRouter>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

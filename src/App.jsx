import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import MyRoutes from './routes';
import AuthProvider from './context/AuthContext';
import { handleLogin } from './context/AuthContext/actions';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    AOS.init();
    return (
        <AuthProvider>
            <Router>
                <MyRoutes />
            </Router>
        </AuthProvider>
    );
}

export default App;

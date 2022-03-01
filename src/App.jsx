import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import MyRoutes from './routes';
import AuthProvider from './context/AuthContext';
import { handleLogin } from './context/AuthContext/actions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PersonProvider from './context/PersonContext';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';

function App() {
    AOS.init({
        once: true,
        duration: 1000,
    });
    return (
        <AuthProvider>
            <PersonProvider>
                <NavBar />
                <Router>
                    <MyRoutes />
                </Router>
                <Footer />
            </PersonProvider>
        </AuthProvider>
    );
}

export default App;

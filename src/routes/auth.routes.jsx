import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import { AuthContext } from '../context/AuthContext/context';
import { useContext } from 'react';
export default function AuthRoutes() {
    return <Route path="/login" element={<Login />} />;
}

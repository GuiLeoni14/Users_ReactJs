import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    );
}

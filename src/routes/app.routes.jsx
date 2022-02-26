import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
export default function AppRoutes() {
    return <Route path="/home" element={<Home />} />;
}

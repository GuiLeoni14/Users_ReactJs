import { AuthContext } from '../../context/AuthContext/context';
import { useContext, useEffect, useState } from 'react';
import { checkToken, handleLogin } from '../../context/AuthContext/actions';
import { handleRegister } from '../../context/AuthContext/actions';
import Form from '../../components/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const [person, setPerson] = useState([]);
    const {
        stateAuth: { authenticated, loading, loginAndRegisterErr },
        setStateAuth,
    } = useContext(AuthContext);
    useEffect(() => {
        if (authenticated) {
            return navigate('/');
        }
        checkToken(setStateAuth);
    }, [authenticated, navigate, setStateAuth]);

    if (loading) {
        return (
            <div>
                <h1>Carregando</h1>
            </div>
        );
    }
    return <Form />;
}

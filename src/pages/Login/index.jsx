import { AuthContext } from '../../context/AuthContext/context';
import { useContext, useEffect, useState } from 'react';
import { handleLogin } from '../../context/AuthContext/actions';
import { handleRegister } from '../../context/AuthContext/actions';
import Form from '../../components/Form';
import axios from 'axios';
export default function Login() {
    const [person, setPerson] = useState([]);
    const {
        stateAuth: { authenticated, loading, loginAndRegisterErr },
        setStateAuth,
    } = useContext(AuthContext);
    useEffect(() => {
        async function getApi() {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL_API}/person`);
            const { data } = response;
            setPerson(data);
        }
        if (authenticated) {
            getApi();
        }
    }, [authenticated]);
    if (loading) {
        return (
            <div>
                <h1>Carregando</h1>
            </div>
        );
    }
    if (!authenticated) {
        return <Form />;
    }
    return (
        <div>
            {person.map((p, index) => (
                <span key={index}>{p.name}</span>
            ))}
        </div>
    );
}

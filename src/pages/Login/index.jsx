import { AuthContext } from '../../context/AuthContext/context';
import { useContext, useEffect, useState } from 'react';
import { handleLogin } from '../../context/AuthContext/actions';
import axios from 'axios';
export default function Login() {
    const [person, setPerson] = useState([]);
    const {
        stateAuth: { authenticated },
        setStateAuth,
    } = useContext(AuthContext);
    useEffect(() => {
        async function getApi() {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL_API}/person`);
            const { data } = response;
            console.log(data);
            setPerson(data);
        }
        if (authenticated) {
            getApi();
        }
    }, [authenticated]);
    if (!authenticated) {
        return (
            <div>
                <button onClick={() => handleLogin(setStateAuth)}>AUTENTICAR</button>
                <h1>Não autenticado</h1>
            </div>
        );
    }
    return (
        <div>
            {person.map((p, index) => (
                <span key={index}>{p.name}</span>
            ))}
        </div>
    );
}

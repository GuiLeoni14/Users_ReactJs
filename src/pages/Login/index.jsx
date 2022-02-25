import { AuthContext } from '../../context/AuthContext/context';
import { useContext, useEffect, useState } from 'react';
import { checkToken, handleLogin } from '../../context/AuthContext/actions';
import Form from '../../components/Form';
import './styles.scss';
import { useNavigate } from 'react-router-dom';
import Container from '../../layout/Container';
import Loading from '../../components/Loading';
export default function Login() {
    const navigate = useNavigate();
    const [person, setPerson] = useState([]);
    const {
        stateAuth: { authenticated, loading, loginAndRegisterErr, user },
        setStateAuth,
    } = useContext(AuthContext);
    console.log(user);
    useEffect(() => {
        if (authenticated) {
            return navigate('/');
        }
        checkToken(setStateAuth);
    }, [authenticated, navigate, setStateAuth]);
    return (
        <div className="s_login">
            {loading && <Loading />}
            <Container>
                <Form />
            </Container>
        </div>
    );
}

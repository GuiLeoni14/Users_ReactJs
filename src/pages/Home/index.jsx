import { AuthContext } from '../../context/AuthContext/context';
import { useContext } from 'react';
export default function Home() {
    const {
        stateAuth: { authenticated, loading, loginAndRegisterErr, user },
        setStateAuth,
    } = useContext(AuthContext);
    console.log(user);
    return <h1>Home</h1>;
}

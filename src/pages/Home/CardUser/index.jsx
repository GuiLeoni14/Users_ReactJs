import P from 'prop-types';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import './styles.scss';
import { handleLogout } from '../../../context/AuthContext/actions';
import { AuthContext } from '../../../context/AuthContext/context';
import { useContext } from 'react';
export default function CardUser() {
    const {
        stateAuth: { user },
        setStateAuth,
    } = useContext(AuthContext);
    return (
        <div className="card_user">
            <h4>Usuário:{user.name}</h4>
            <span>Email:{user.email}</span>
            <DefaultButton text="sair" customClass="logout" handleClick={() => handleLogout(setStateAuth)} />
        </div>
    );
}

CardUser.propTypes = {
    user: P.any,
};

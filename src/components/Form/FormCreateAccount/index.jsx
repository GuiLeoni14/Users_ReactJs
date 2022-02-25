import Input from '../Input';
import P from 'prop-types';
import { useEffect, useState } from 'react';
import './styles.scss';
import { AuthContext } from '../../../context/AuthContext/context';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { DefaultButton } from '../../Buttons/DefaultButton';
import { useNavigate } from 'react-router-dom';
import { handleRegister } from '../../../context/AuthContext/actions';
import { resetMessage } from '../../../context/AuthContext/actions';
export default function FormCreateAccount({ titleForm }) {
    const {
        stateAuth: { authenticated, loading, loginAndRegisterErr },
        setStateAuth,
    } = useContext(AuthContext);
    const navigate = useNavigate();
    const [values, setValues] = useState({}); // valuesDev tem que vir primeiro
    const handleOnChange = (e) => {
        resetMessage(setStateAuth);
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        // setMessage('');
    };
    const submit = (e) => {
        e.preventDefault();
        handleRegister(setStateAuth, values, () => navigate('/'));
        // setMessage({ text: 'Ação realizada com sucesso', type: 'success' });
    };
    return (
        <form onSubmit={submit} className="form" data-aos="fade-up">
            {titleForm && <h2>{titleForm}</h2>}
            {loginAndRegisterErr && <h3>{loginAndRegisterErr}</h3>}
            <div className="fields">
                <Input
                    name="name"
                    type="text"
                    textLabel="Nome:"
                    handleChange={handleOnChange}
                    icon={<FaUserCircle />}
                />
                <Input
                    name="email"
                    type="text"
                    textLabel="Email:"
                    handleChange={handleOnChange}
                    icon={<FaUserCircle />}
                />
                <Input
                    name="password"
                    type="password"
                    textLabel="Senha:"
                    handleChange={handleOnChange}
                    icon={<RiLockPasswordFill />}
                />
                <Input
                    name="confirmPassword"
                    type="password"
                    textLabel="Confirmar Senha:"
                    handleChange={handleOnChange}
                    icon={<RiLockPasswordFill />}
                />
                <DefaultButton customClass="login" text="Login" />
            </div>
        </form>
    );
}

FormCreateAccount.propTypes = {
    titleForm: P.string,
};

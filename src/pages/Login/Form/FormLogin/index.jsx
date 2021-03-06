import Input from '../../../../components/Input';
import P from 'prop-types';
import { useState } from 'react';
import './styles.scss';
import { AuthContext } from '../../../../context/AuthContext/context';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { handleLogin, resetMessage } from '../../../../context/AuthContext/actions';
import { DefaultButton } from '../../../../components/Buttons/DefaultButton';
import Check from '../../../../components/Check';
export default function FormLogin({ titleForm }) {
    const [checked, setChecked] = useState(false);
    const {
        stateAuth: { authenticated, loading, loginAndRegisterErr, messageSuccess },
        setStateAuth,
    } = useContext(AuthContext);
    const [values, setValues] = useState({}); // valuesDev tem que vir primeiro
    const handleOnChange = (e) => {
        e.preventDefault();
        resetMessage(setStateAuth);
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        // setMessage('');
    };
    const submit = (e) => {
        e.preventDefault();
        handleLogin(setStateAuth, values);
        // setMessage({ text: 'Ação realizada com sucesso', type: 'success' });
    };
    return (
        <>
            <form onSubmit={submit} className="form">
                {titleForm && <h2>{titleForm}</h2>}
                {loginAndRegisterErr && <h3 id="message_error">{loginAndRegisterErr}</h3>}
                {messageSuccess && <h3 id="message_success">{messageSuccess}, realize login.</h3>}
                <div className="fields">
                    <Input
                        name="email"
                        type="email"
                        textLabel="Email"
                        handleChange={handleOnChange}
                        icon={<FaUserCircle />}
                    />
                    <Input
                        name="password"
                        type={checked ? 'text' : 'password'}
                        textLabel="Senha"
                        handleChange={handleOnChange}
                        icon={<RiLockPasswordFill />}
                    />
                    <Check checked={checked} setChecked={setChecked} />
                    <DefaultButton customClass="login" text="Login" />
                </div>
            </form>
        </>
    );
}

FormLogin.propTypes = {
    titleForm: P.string,
};

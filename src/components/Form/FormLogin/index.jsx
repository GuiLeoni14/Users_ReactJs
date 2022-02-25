import Input from '../Input';
import P from 'prop-types';
import { useState } from 'react';
import './styles.scss';
import { AuthContext } from '../../../context/AuthContext/context';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { handleLogin } from '../../../context/AuthContext/actions';
import { DefaultButton } from '../../Buttons/DefaultButton';
import { resetMessage } from '../../../context/AuthContext/actions';
import Loading from '../../Loading';
export default function FormLogin({ titleForm }) {
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
            <form onSubmit={submit} className="form" data-aos="fade-up">
                {titleForm && <h2>{titleForm}</h2>}
                {loginAndRegisterErr && <h3 id="message_error">{loginAndRegisterErr}</h3>}
                {messageSuccess && <h3 id="message_success">{messageSuccess}, realize login.</h3>}
                <div className="fields">
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
                    <DefaultButton customClass="login" text="Login" />
                </div>
            </form>
        </>
    );
}

FormLogin.propTypes = {
    titleForm: P.string,
};

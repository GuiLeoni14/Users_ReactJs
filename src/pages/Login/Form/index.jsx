import FormLogin from './FormLogin';
import P from 'prop-types';
import './styles.scss';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import { useRef, useContext } from 'react';
import FormCreateAccount from './FormCreateAccount';
import { resetMessage } from '../../../context/AuthContext/actions';
import { AuthContext } from '../../../context/AuthContext/context';
import logo from '../../../assets/img/logo.svg';
export default function Form() {
    const { setStateAuth } = useContext(AuthContext);
    const mainFormRef = useRef(null);
    const openContentSignIn = () => {
        mainFormRef.current.classList.toggle('open-signin-js');
        resetMessage(setStateAuth);
    };
    return (
        <div className="main-form" ref={mainFormRef}>
            <div className="login" data-aos="fade-up">
                <div className="primary">
                    <img src={logo} alt="" />
                    <span>Acessar o sistema</span>
                    <FormLogin />
                    <h4>
                        <a onClick={openContentSignIn}>você não tem uma conta? crie sua conta aqui.</a>
                    </h4>
                </div>
                <div className="second">
                    <h2>Olá, pessoal!</h2>
                    <p>
                        Este é um projeto desenvolvido durante um desafio proposto pela comunidade Ballerini, nenhuma
                        informação contida aqui deve ser levada como algo real, tanto seu email quando seu nome podem
                        ser “fakes”, apenas contendo o @ seu email será validado. Seja bem vindo!
                    </p>
                    <DefaultButton text="Registrar" customClass="sing" handleClick={openContentSignIn} />
                </div>
            </div>
            <div className="signin" data-aos="fade-up">
                <div className="second">
                    <h2>Olá, pessoal!</h2>
                    <p>
                        Este é um projeto desenvolvido durante um desafio proposto pela comunidade Ballerini, nenhuma
                        informação contida aqui deve ser levada como algo real, tanto seu email quando seu nome podem
                        ser “fakes”, apenas contendo o @ seu email será validado. Seja bem vindo!
                    </p>
                    <DefaultButton text="Login" customClass="sing" handleClick={openContentSignIn} />
                </div>
                <div className="primary">
                    <img src={logo} alt="" />
                    <span>Registrar no sistema</span>
                    <FormCreateAccount />
                    <h4>
                        <a onClick={openContentSignIn}>você tem uma conta? login.</a>
                    </h4>
                </div>
            </div>
        </div>
    );
}

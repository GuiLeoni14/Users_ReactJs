import FormLogin from './FormLogin';
import P from 'prop-types';
import './styles.scss';
import { DefaultButton } from '../Buttons/DefaultButton';
import { useRef, useContext } from 'react';
import FormCreateAccount from './FormCreateAccount';
import { resetMessage } from '../../context/AuthContext/actions';
import { AuthContext } from '../../context/AuthContext/context';
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
                    <h2>Sign In System</h2>
                    <span>use your email for account</span>
                    <FormLogin />
                    <h4>
                        <a onClick={openContentSignIn}>you not have account? create account</a>
                    </h4>
                </div>
                <div className="second">
                    <h2>hello friends</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui, doloremque repellendus eaque
                        aut doloribus repudiandae aperiam quidem ratione modi.
                    </p>
                    <DefaultButton text="Sign In" customClass="sing" handleClick={openContentSignIn} />
                </div>
            </div>
            <div className="signin" data-aos="fade-up">
                <div className="second">
                    <h2>Hello Friend</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui, doloremque repellendus eaque
                        aut doloribus repudiandae aperiam quidem ratione modi.
                    </p>
                    <DefaultButton text="Login" customClass="sing" handleClick={openContentSignIn} />
                </div>
                <div className="primary">
                    <h2>Sign InSystem</h2>
                    <span>use your email for account</span>
                    <FormCreateAccount />
                    <h4>
                        <a onClick={openContentSignIn}>you have account? login</a>
                    </h4>
                </div>
            </div>
        </div>
    );
}

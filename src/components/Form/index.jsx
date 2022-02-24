import FormLogin from './FormLogin';
import P from 'prop-types';
import './styles.scss';
import { DefaultButton } from '../Buttons/DefaultButton';
import { useRef } from 'react';
import FormCreateAccount from './FormCreateAccount';
export default function Form() {
    const mainFormRef = useRef(null);
    const openContentSingIn = () => {
        mainFormRef.current.classList.toggle('open-singin-js');
    };
    return (
        <div className="main-form" ref={mainFormRef}>
            <div className="login" data-aos="fade-up">
                <div className="primary">
                    <h2>Sing in Sistem</h2>
                    <span>use your email for acccount</span>
                    <FormLogin />
                    <h4>
                        <a href="/auth/register">your not account? create account</a>
                    </h4>
                </div>
                <div className="second">
                    <h2>Hello Friend</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui, doloremque repellendus eaque
                        aut doloribus repudiandae aperiam quidem ratione modi.
                    </p>
                    <DefaultButton text="Sing in" customClass="sing" handleClick={openContentSingIn} />
                </div>
            </div>
            <div className="singin" data-aos="fade-up">
                <div className="second">
                    <h2>Hello Friend</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod qui, doloremque repellendus eaque
                        aut doloribus repudiandae aperiam quidem ratione modi.
                    </p>
                    <DefaultButton text="Login" customClass="sing" handleClick={openContentSingIn} />
                </div>
                <div className="primary">
                    <h2>Sing in Sistem</h2>
                    <span>use your email for acccount</span>
                    <FormCreateAccount />
                    <h4>
                        <a href="/auth/register">your not account? create account</a>
                    </h4>
                </div>
            </div>
        </div>
    );
}

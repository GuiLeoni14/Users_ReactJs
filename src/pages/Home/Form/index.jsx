import Input from '../../../components/Form/Input';
import P from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import './styles.scss';
import { addPerson } from '../../../context/PersonContext/actions';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import { FaUserCircle } from 'react-icons/fa';
import { RiH2, RiLockPasswordFill } from 'react-icons/ri';
import { PersonContext } from '../../../context/PersonContext/context';
export default function Form({ titleForm }) {
    const {
        statePerson: { error },
        personDispatch,
    } = useContext(PersonContext);
    const [values, setValues] = useState({}); // valuesDev tem que vir primeiro
    const handleOnChange = (e) => {
        e.preventDefault();
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        addPerson(personDispatch, values);
    };
    return (
        <>
            <form onSubmit={submit} className="form_person" data-aos="fade-up">
                {error && <h2>{error}</h2>}
                <div className="fields">
                    <Input
                        name="name"
                        type="text"
                        textLabel="name:"
                        handleChange={handleOnChange}
                        icon={<FaUserCircle />}
                    />
                    <Input
                        name="profession"
                        type="text"
                        textLabel="profession:"
                        handleChange={handleOnChange}
                        icon={<FaUserCircle />}
                    />
                    <Input
                        name="github"
                        type="text"
                        textLabel="github:"
                        handleChange={handleOnChange}
                        icon={<FaUserCircle />}
                    />
                    <Input
                        name="linkedin"
                        type="text"
                        textLabel="linkedin:"
                        handleChange={handleOnChange}
                        icon={<FaUserCircle />}
                    />
                    <Input
                        name="description"
                        type="password"
                        textLabel="description:"
                        handleChange={handleOnChange}
                        icon={<RiLockPasswordFill />}
                    />
                    <Input
                        name="job"
                        type="password"
                        textLabel="job:"
                        handleChange={handleOnChange}
                        icon={<RiLockPasswordFill />}
                    />
                    <DefaultButton customClass="login" text="Login" type="submit" />
                </div>
            </form>
        </>
    );
}

Form.propTypes = {
    titleForm: P.string,
};

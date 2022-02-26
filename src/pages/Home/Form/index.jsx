import Input from '../../../components/Input';
import P from 'prop-types';
import { useState, useEffect, useContext } from 'react';
import './styles.scss';
import { addPerson, editPerson, resetMessagesPerson } from '../../../context/PersonContext/actions';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import { FaGamepad, FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import { RiFileUserLine, RiH2, RiH3, RiLockPasswordFill } from 'react-icons/ri';
import { PersonContext } from '../../../context/PersonContext/context';
import { MdDescription, MdInsertPhoto, MdOutlineHomeWork } from 'react-icons/md';
export default function Form({ titleForm, valuesPerson, editButton }) {
    console.log(valuesPerson);
    const {
        statePerson: { error, messageSuccess },
        personDispatch,
    } = useContext(PersonContext);
    const [values, setValues] = useState(valuesPerson || {}); // valuesDev tem que vir primeiro
    const handleOnChange = (e) => {
        e.preventDefault();
        resetMessagesPerson(personDispatch);
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        if (valuesPerson) {
            editPerson(personDispatch, values);
            return;
        }
        addPerson(personDispatch, values);
    };
    return (
        <>
            <form onSubmit={submit} className="form_person" data-aos="fade-up">
                {titleForm && <h3 id="title_form">{titleForm}</h3>}
                {error && <h3 id="message_error_form">{error}</h3>}
                {messageSuccess && <h3 id="message_success_form">{messageSuccess}</h3>}
                <div className="fields">
                    <Input
                        name="name"
                        type="text"
                        textLabel="name"
                        handleChange={handleOnChange}
                        value={values ? values.name : ''}
                        icon={<FaUserCircle />}
                    />
                    <Input
                        name="job"
                        type="text"
                        textLabel="job"
                        handleChange={handleOnChange}
                        value={values ? values.job : ''}
                        icon={<MdOutlineHomeWork />}
                    />
                    <Input
                        name="avatar"
                        type="text"
                        textLabel="avatar(url)"
                        handleChange={handleOnChange}
                        value={values ? values.avatar : ''}
                        icon={<MdInsertPhoto />}
                    />
                    <Input
                        name="github"
                        type="text"
                        textLabel="github(url)"
                        handleChange={handleOnChange}
                        value={values ? values.github : ''}
                        icon={<FaGithub />}
                    />
                    <Input
                        name="linkedin"
                        type="text"
                        textLabel="linkedin(url)"
                        handleChange={handleOnChange}
                        value={values ? values.linkedin : ''}
                        icon={<FaLinkedin />}
                    />
                    <Input
                        name="description"
                        type="text"
                        textLabel="description"
                        handleChange={handleOnChange}
                        value={values ? values.description : ''}
                        icon={<MdDescription />}
                    />
                    {editButton ? (
                        <DefaultButton customClass="edit" text="Editar" type="submit" />
                    ) : (
                        <DefaultButton customClass="add" text="Adicionar" type="submit" />
                    )}
                </div>
            </form>
        </>
    );
}

Form.propTypes = {
    titleForm: P.string,
    valuesPerson: P.any,
    editButton: P.any,
};

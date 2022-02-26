import './styles.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin3Fill } from 'react-icons/ri';
import CardHover from '../../../components/CardHover';
import Form from '../Form';
import CardDelete from '../CardDelete';
import P from 'prop-types';
export default function CardPerson({ name, avatar, description, github, linkedin, email, id, job }) {
    const valuesPeron = {
        name,
        job,
        avatar,
        description,
        github,
        linkedin,
        email,
        id,
    };
    return (
        <div className="card_person">
            <div className="icon_edit">
                <CardHover icon={<FiEdit />}>
                    <Form valuesPerson={valuesPeron} editButton={true} titleForm="Editar Registro" />
                </CardHover>
            </div>
            <div className="icon_delete">
                <CardHover icon={<RiDeleteBin3Fill />}>
                    <CardDelete id={id} />
                </CardHover>
            </div>
            <div className="top">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="text">
                    <h4>{name}</h4>
                    <span>{job}</span>
                </div>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="contact">
                <a href={github} id="github_clinkedin">
                    <FaGithub />
                </a>
                <a href={linkedin} id="github_contact">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

CardPerson.propTypes = {
    name: P.string,
    job: P.string,
    avatar: P.string,
    description: P.string,
    github: P.string,
    linkedin: P.string,
    email: P.string,
    id: P.string,
};

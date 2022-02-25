import './styles.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin3Fill } from 'react-icons/ri';
import CardHover from '../../../components/CardHover';
import Form from '../Form';
import CardDelete from '../CardDelete';
import P from 'prop-types';
export default function CardPerson({ name, profession, avatar, description, github, linkedin, email }) {
    return (
        <div className="card_person">
            <div className="icon_edit">
                <CardHover icon={<FiEdit />}>
                    <Form />
                </CardHover>
            </div>
            <div className="icon_delete">
                <CardHover icon={<RiDeleteBin3Fill />}>
                    <CardDelete />
                </CardHover>
            </div>
            <div className="top">
                <div className="image">
                    <img src="https://avatars.githubusercontent.com/u/86159016?v=4" alt="" />
                </div>
                <div className="text">
                    <h4>{name}</h4>
                    <span>{profession}</span>
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia necessitatibus blanditiis quia
                provident. Et quis asperiores rerum!
            </p>
            <div className="contact">
                <a href={linkedin} id="github_clinkedin">
                    <FaGithub />
                </a>
                <a href={github} id="github_contact">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

CardPerson.propTypes = {
    name: P.string,
    profession: P.string,
    avatar: P.string,
    description: P.string,
    github: P.string,
    linkedin: P.string,
    email: P.string,
};

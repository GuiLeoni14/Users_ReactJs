import { AuthContext } from '../../context/AuthContext/context';
import { useContext, useEffect } from 'react';
import { PersonContext } from '../../context/PersonContext/context';
import { addPerson, loadPerson } from '../../context/PersonContext/actions';
import Container from '../../layout/Container';
import { MdManageAccounts } from 'react-icons/md';
import Form from './Form';
import './styles.scss';
import CardPerson from './CardPerson';
import Loading from '../../components/Loading';
import CardHover from '../../components/CardHover';
import { FaUser } from 'react-icons/fa';
import Input from '../../components/Form/Input';
import CardUser from './CardUser';
import { DefaultButton } from '../../components/Buttons/DefaultButton';
import MyDialog from './Dialog';
export default function Home() {
    const {
        stateAuth: { user },
    } = useContext(AuthContext);
    const {
        statePerson: { persons, error, loading },
        personDispatch,
    } = useContext(PersonContext);
    useEffect(() => {
        loadPerson(personDispatch);
    }, [personDispatch]);
    return (
        <div className="s_home">
            <Container>
                {loading && <Loading />}
                <div className="main_home">
                    <div className="top_content">
                        <div className="user">
                            <CardHover icon={<MdManageAccounts />}>
                                <CardUser user={user} />
                            </CardHover>
                        </div>
                        <Input type="search" placeholder="Pesquisar por pessoas" />
                        <MyDialog>
                            <Form />
                        </MyDialog>
                    </div>
                    <div className="persons">
                        {persons.length > 0 &&
                            persons.map((person) => (
                                <CardPerson
                                    key={person._id}
                                    id={person._id}
                                    name={person.name}
                                    profession={person.profession}
                                    linkedin={person.linkedin}
                                    github={person.github}
                                    email={person.email}
                                    job={person.job}
                                    description={person.description}
                                    avatar={person.avatar}
                                />
                            ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

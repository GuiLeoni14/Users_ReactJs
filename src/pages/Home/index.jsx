import { AuthContext } from '../../context/AuthContext/context';
import { useContext, useEffect } from 'react';
import { PersonContext } from '../../context/PersonContext/context';
import { addPerson, loadPerson } from '../../context/PersonContext/actions';
import Container from '../../layout/Container';
import Form from './Form';
import './styles.scss';
import CardPerson from './CardPerson';
import Loading from '../../components/Loading';
import CardHover from '../../components/CardHover';
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
    console.log(persons);
    console.log(error);
    useEffect(() => {
        addPerson(personDispatch, {
            name: 'gui',
            github: 'GuiLeoni14',
        });
    }, []);
    return (
        <div className="s_home">
            <Container>
                {loading && <Loading />}
                <div className="main_home">
                    {persons.length > 0 &&
                        persons.map((person) => (
                            <CardPerson
                                key={person._id}
                                name={person.name}
                                profession={person.profession}
                                linkedin={person.linkedin}
                                github={person.github}
                                email={person.email}
                                description={person.description}
                                avatar={person.avatar}
                            />
                        ))}
                    <Form />
                </div>
            </Container>
        </div>
    );
}

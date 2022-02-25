import { AuthContext } from '../../context/AuthContext/context';
import { useContext, useEffect } from 'react';
import { PersonContext } from '../../context/PersonContext/context';
import { addPerson, loadPerson } from '../../context/PersonContext/actions';
import Container from '../../layout/Container';
import Form from './Form';
export default function Home() {
    const {
        stateAuth: { user },
    } = useContext(AuthContext);
    const {
        statePerson: { persons, error },
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
                <div className="main_home">
                    {persons.length > 0 && persons.map((person) => <h1 key={person._id}>{person.name}</h1>)}
                </div>
                <Form />
            </Container>
        </div>
    );
}

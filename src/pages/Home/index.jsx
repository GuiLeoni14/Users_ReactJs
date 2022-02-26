import { AuthContext } from '../../context/AuthContext/context';
import { useContext, useEffect } from 'react';
import { PersonContext } from '../../context/PersonContext/context';
import { loadPerson } from '../../context/PersonContext/actions';
import Container from '../../layout/Container';
import { MdManageAccounts } from 'react-icons/md';
import Form from './Form';
import './styles.scss';
import CardPerson from './CardPerson';
import Loading from '../../components/Loading';
import CardUser from './CardUser';
import MyDialog from './Dialog';
import logo from '../../assets/img/logo.svg';
import DialogOpen from './DialogOpen';
import { useState } from 'react';
export default function Home() {
    const [openDialogUser, setOpenDialogUser] = useState(false);
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
                        <div className="user" onClick={() => setOpenDialogUser(!openDialogUser)}>
                            <MdManageAccounts />
                        </div>
                        {openDialogUser && (
                            <DialogOpen>
                                <CardUser user={user} setFunction={() => setOpenDialogUser(!openDialogUser)} />
                            </DialogOpen>
                        )}
                        <img src={logo} id="logo" />
                        {/* <Input type="search" placeholder="Pesquisar por pessoas" /> */}
                        <MyDialog>
                            <Form titleForm="Criar registro" />
                        </MyDialog>
                    </div>
                    <div className="persons">
                        {persons.length > 0 &&
                            persons.map((person) => (
                                <CardPerson
                                    key={person._id}
                                    id={person._id}
                                    name={person.name}
                                    job={person.job}
                                    linkedin={person.linkedin}
                                    github={person.github}
                                    email={person.email}
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

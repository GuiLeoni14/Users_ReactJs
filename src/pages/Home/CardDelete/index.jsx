import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import './styles.scss';
import P from 'prop-types';
import { deletePerson } from '../../../context/PersonContext/actions';
import { useContext } from 'react';
import { PersonContext } from '../../../context/PersonContext/context';
export default function CardDelete({ id }) {
    const { personDispatch } = useContext(PersonContext);
    return (
        <div className="card_delete">
            <h4>Deseja mesmo deletar esse registro?</h4>
            <DefaultButton text="Deletar" customClass="delete" handleClick={() => deletePerson(personDispatch, id)} />
        </div>
    );
}

CardDelete.propTypes = {
    id: P.string,
};

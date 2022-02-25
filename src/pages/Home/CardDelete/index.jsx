import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import './styles.scss';
import P from 'prop-types';
export default function CardDelete({ id }) {
    return (
        <div className="card_delete">
            <h4>Deseja mesmo deletar esse registro?</h4>
            <DefaultButton text="Deletar" customClass="delete" />
        </div>
    );
}

CardDelete.propTypes = {
    id: P.string,
};

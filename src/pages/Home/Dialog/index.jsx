import './styles.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import P from 'prop-types';
export default function MyDialog({ children }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <DefaultButton text="Adicionar registro" customClass="add" />
            </Dialog.Trigger>
            <Dialog.Overlay className="overlay">
                <Dialog.Content className="content">{children}</Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Root>
    );
}

MyDialog.propTypes = {
    children: P.node,
};

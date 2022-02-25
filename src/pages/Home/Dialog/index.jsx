import './styles.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { DefaultButton } from '../../../components/Buttons/DefaultButton';
import P from 'prop-types';
export default function MyDialog({
    children,
    content,
    typeButton,
    textButton,
    titleForm,
    handleSubmitForm,
    setMessage,
}) {
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
    handleSubmitForm: P.func,
    content: P.node,
    typeButton: P.string,
    textButton: P.string,
    setMessage: P.func,
    titleForm: P.string,
};

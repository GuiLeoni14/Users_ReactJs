import './styles.scss';
import * as Dialog from '@radix-ui/react-dialog';
import P from 'prop-types';
export default function DialogOpen({ children }) {
    return (
        <Dialog.Root defaultOpen={true}>
            <Dialog.Overlay className="overlay_open">
                <Dialog.Content className="content_open">{children}</Dialog.Content>
            </Dialog.Overlay>
        </Dialog.Root>
    );
}

DialogOpen.propTypes = {
    children: P.any,
};

import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import './styles.scss';
import P from 'prop-types';
export default function Check({ checked, setChecked }) {
    return (
        <div className="main_check">
            <Checkbox.Root className="check" checked={checked} onCheckedChange={setChecked}>
                <Checkbox.Indicator>
                    <CheckIcon />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <h6>Exibir password</h6>
        </div>
    );
}

Check.propTypes = {
    checked: P.any,
    setChecked: P.any,
};

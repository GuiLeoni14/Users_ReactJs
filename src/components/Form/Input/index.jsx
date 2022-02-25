import P from 'prop-types';
import './styles.scss';
export default function Input({ type, placeholder, value, name, textLabel, handleChange, icon }) {
    return (
        <>
            <label htmlFor={name} className="label">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    id={name}
                    onChange={handleChange}
                    required
                />
                {icon}
            </label>
        </>
    );
}

Input.propTypes = {
    type: P.string,
    placeholder: P.string,
    value: P.any,
    name: P.string,
    textLabel: P.string,
    handleChange: P.func,
    icon: P.any,
};

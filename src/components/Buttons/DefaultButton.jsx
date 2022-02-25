import P from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';
export function DefaultButton({ children, text, link, customClass, type = 'submit', handleClick }) {
    return (
        <>
            {link ? (
                <Link to={link}>{children}</Link>
            ) : (
                <button type={type} className={`btn btn-${customClass}`} onClick={handleClick}>
                    {text}
                </button>
            )}
        </>
    );
}

DefaultButton.propTypes = {
    text: P.string,
    link: P.string,
    customClass: P.string,
    type: P.string,
    handleClick: P.func,
};

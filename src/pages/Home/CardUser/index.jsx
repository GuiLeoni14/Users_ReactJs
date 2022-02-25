import P from 'prop-types';
import './styles.scss';
export default function CardUser({ user }) {
    return (
        <div className="card_user">
            <h4>{user.name}</h4>
            <span>{user.email}</span>
        </div>
    );
}

CardUser.propTypes = {
    user: P.any,
};

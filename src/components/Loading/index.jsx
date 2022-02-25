import gif_loading from '../../assets/img/gifloading.gif';
import Container from '../../layout/Container';
import './styles.scss';
export default function Loading() {
    return (
        <div className="s_loading">
            <Container>
                <img src={gif_loading} alt="" />
            </Container>
        </div>
    );
}

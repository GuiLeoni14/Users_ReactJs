import Container from '../../layout/Container';
import notfound_gif from '../../assets/img/notfound.gif';
import './styles.scss';
import { DefaultButton } from '../../components/Buttons/DefaultButton';
export default function NotFound() {
    return (
        <div className="s_notfound">
            <Container>
                <div className="main_notfound">
                    <img src={notfound_gif} alt="" />
                    <div className="info">
                        <DefaultButton link="/">
                            <DefaultButton text="Voltar para home" customClass="add" />
                        </DefaultButton>
                    </div>
                </div>
            </Container>
        </div>
    );
}

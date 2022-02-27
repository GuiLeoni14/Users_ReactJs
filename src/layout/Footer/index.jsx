import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import Container from '../Container';
import './styles.scss';
export default function Footer() {
    return (
        <footer>
            <Container>
                <div className="contact">
                    <a href="https://www.linkedin.com/in/guileoni14/" target="_blank" rel="noopener noreferrer">
                        <h4>Desenvolvido por Guilherme Leoni</h4>
                    </a>
                    <a href="https://www.linkedin.com/in/guileoni14/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/GuiLeoni14" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </Container>
        </footer>
    );
}

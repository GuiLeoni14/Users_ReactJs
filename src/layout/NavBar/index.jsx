import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import Container from '../Container';
import './styles.scss';
export default function NavBar() {
    return (
        <header data-aos="fade-down">
            <Container>
                <div className="contact">
                    <a href="https://discord.gg/ballerini" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </a>
                    <a href="https://www.linkedin.com/in/guileoni14/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/GuiLeoni14" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                </div>
            </Container>
        </header>
    );
}

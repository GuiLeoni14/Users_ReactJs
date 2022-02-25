export default function CardPerson({ name, profession, avatar, description, github, linkedin, email }) {
    <div className="card">
        <div className="top">
            <img src={avatar} alt="" />
            <div className="text">
                <h4>{name}</h4>
                <span>{profession}</span>
            </div>
        </div>
        <p>{description}</p>
        <div className="contact">
            <a href={linkedin} id="github_clinkedin">
                <img src="" alt="" />
            </a>
            <a href={github} id="github_contact">
                <img src="" alt="" />
            </a>
        </div>
    </div>;
}

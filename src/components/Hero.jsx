const Hero = () => {
    return (
        <div className="hero-container">
            <img className="profile-img" src="./images/profile.jpeg" alt="Vladyslav Braslavskyi personal headshot" />
            <div className="hero-text">
                <h1>Hey, I'm Vladyslav Braslavskyi 👋</h1>
                <p>
                    I'm a Backend Developer with 3 years of work experience.<br />
                    My passion is crafting innovative and user-friendly apps for various platforms.
                </p>
                <div className="social-icons">
                    <a
                        href="https://t.me/vlbras"
                        aria-label="Telegram"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-telegram"></i>
                    </a>
                    <a
                        href="https://github.com/vlbras"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vladyslav-braslavskyi"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;
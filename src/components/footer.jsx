const Footer = () => {
    return (
        <>
            <hr />
            <div className="footer-container">
                <p>
                    &copy; {new Date().getFullYear()} Vladyslav Braslavskyi Portfolio
                </p>
                <div className="social_icons">
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
        </>
    )
}

export default Footer;
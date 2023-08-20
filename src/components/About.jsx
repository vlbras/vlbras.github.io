const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        I'm an organized and reliable candidate successful at managing multiple priorities with a positive attitude. Willingness to take on additional responsibilities to achieve team goals. Detail-oriented team player with strong social skills. Ability to manage multiple projects simultaneously with a high degree of accuracy.
                    </p>
                    <p>
                        As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development, with a focus on backend technologies such as Node.js, Express.js, Nest.js, SQL and NoSQL. I'm always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.
                    </p>
                    <p>
                        Throughout my career, I have worked on a wide range of projects, from simple static websites to complex enterprise-level applications. I am experienced in working with a variety of development tools, including Jest, Docker, Git and AWS. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to improve my skills and knowledge.
                    </p>
                </div>
                <div className="about-img">
                    <img className="profile-img" src="./images/about.jpeg" />
                </div>
            </div>
        </div>

    )
}

export default About;
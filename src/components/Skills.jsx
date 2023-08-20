const Skills = () => {
    return (
        <div className="skills-container">
            <h2>Best Skills</h2>
            <div className="grid-skills">
                {/* <div className="skill-card angular">
                    <i className="fa-brands fa-angular"></i>
                    <p>Angular</p>
                </div>
                <div className="skill-card react">
                    <i className="fa-brands fa-react react-icon"></i>
                    <p>React</p>
                </div>
                <div className="skill-card vue">
                    <i className="fa-brands fa-vuejs vue-icon"></i>
                    <p>Vue</p>
                </div> */}

                { /* Back-end: */}

                <div className="skill-card node">
                    <i className="fa-brands fa-node-js"></i>
                    <p>Node</p>
                </div>
                <div className="skill-card express">
                    <i className="fa-brands"></i>
                    <p>Express</p>
                </div>
                <div className="skill-card nest">
                    <i className="fa-brands"></i>
                    <p>Nest</p>
                </div>
                <div className="skill-card ts">
                    <i className="fa-brands"></i>
                    <p>TypeScript</p>
                </div>

                { /* Front-end: */}

                {/* <div className="skill-card html">
                    <i className="fa-brands fa-html5 html-icon"></i>
                    <p>HTML</p>
                </div>
                <div className="skill-card css">
                    <i className="fa-brands fa-css3-alt"></i>
                    <p>CSS</p>
                </div>
                <div className="skill-card js">
                    <i className="fa-brands fa-js-square"></i>
                    <p>JavaScript</p>
                </div>
                <div className="skill-card sass">
                    <i className="fa-brands fa-sass"></i>
                    <p>SASS</p>
                </div> */}

                { /* Tools: */}

                <div className="skill-card docker">
                    <i className="fa-brands fa-docker"></i>
                    <p>Docker</p>
                </div>
                <div className="skill-card aws">
                    <i className="fa-brands fa-aws"></i>
                    <p>AWS</p>
                </div>
                <div className="skill-card postgre">
                    <i className="fa-brands"></i>
                    <p>PostgreSQL</p>
                </div>
                <div className="skill-card mongo">
                    <i className="fa-brands"></i>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
    )
}

export default Skills;
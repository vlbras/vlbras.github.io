import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiTypescript,
  SiDocker,
  SiAmazonaws,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

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

        {/* Back-end: */}

        <div className="skill-card node">
          <SiNodedotjs />
          <p>Node</p>
        </div>
        <div className="skill-card express">
          <SiExpress />
          <p>Express</p>
        </div>
        <div className="skill-card nest">
          <SiNestjs />
          <p>Nest</p>
        </div>
        <div className="skill-card ts">
          <SiTypescript />
          <p>TypeScript</p>
        </div>

        {/* Front-end: */}

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

        {/* Tools: */}

        <div className="skill-card docker">
          <SiDocker />
          <p>Docker</p>
        </div>
        <div className="skill-card aws">
          <SiAmazonaws />
          <p>AWS</p>
        </div>
        <div className="skill-card postgre">
          <SiPostgresql />
          <p>PostgreSQL</p>
        </div>
        <div className="skill-card mongo">
          <SiMongodb />
          <p>MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

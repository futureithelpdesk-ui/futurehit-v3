import "./Skills.css";

const skills = [
  {
    title: "Cyber Security",
    desc: "Advanced security analysis and ethical research."
  },
  {
    title: "Digital Intelligence",
    desc: "Collecting and analysing digital information."
  },
  {
    title: "Threat Analysis",
    desc: "Finding vulnerabilities before attackers."
  },
  {
    title: "Privacy Protection",
    desc: "Helping people stay secure online."
  },
  {
    title: "Web Development",
    desc: "Modern React applications."
  },
  {
    title: "Open Source",
    desc: "Building useful public projects."
  }
];

export default function Skills() {

  return (

    <section className="skills">

      <p className="section-tag">

        SKILLS

      </p>

      <h2>

        WHAT I DO

      </h2>

      <div className="skills-grid">

        {skills.map((item,index)=>(

          <div
            className="skill-card"
            key={index}
          >

            <h3>

              {item.title}

            </h3>

            <p>

              {item.desc}

            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

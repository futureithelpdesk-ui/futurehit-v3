import "./Projects.css";

const projects = [
  {
    title: "Future V3",
    desc: "Advanced futuristic cyber intelligence platform.",
    tech: "React • Vite • TypeScript"
  },
  {
    title: "Threat Monitor",
    desc: "Live monitoring dashboard for cyber events.",
    tech: "Supabase • Realtime"
  },
  {
    title: "Notification Center",
    desc: "Firebase Push Notification System.",
    tech: "Firebase • FCM"
  },
  {
    title: "Future Scanner",
    desc: "Digital investigation toolkit interface.",
    tech: "React • API"
  },
  {
    title: "Secure Login",
    desc: "Authentication & role management.",
    tech: "Supabase Auth"
  },
  {
    title: "AI Assistant",
    desc: "Integrated intelligent helper.",
    tech: "OpenAI"
  }
];

export default function Projects() {
  return (
    <section className="projects">

      <p className="section-tag">
        PROJECTS
      </p>

      <h2>
        FEATURED WORK
      </h2>

      <div className="project-grid">

        {projects.map((item, index) => (

          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <span>{item.tech}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

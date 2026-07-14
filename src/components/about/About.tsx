import "./About.css";

export default function About() {
  return (
    <section className="about">

      <div className="about-left">

        <p className="about-tag">
          WHO AM I
        </p>

        <h2>
          FUTURE
        </h2>

        <p className="about-text">

          Future is a Cyber Intelligence platform focused on
          Digital Privacy, Ethical Security Research,
          Threat Analysis and Technology Innovation.

          The mission is to protect people, spread awareness
          and build secure digital solutions.

        </p>

      </div>

      <div className="about-right">

        <div className="info-card">

          <h3>Mission</h3>

          <p>

            Protect Digital World

          </p>

        </div>

        <div className="info-card">

          <h3>Focus</h3>

          <p>

            Cyber Security

          </p>

        </div>

        <div className="info-card">

          <h3>Experience</h3>

          <p>

            Ethical Research

          </p>

        </div>

      </div>

    </section>
  );
}

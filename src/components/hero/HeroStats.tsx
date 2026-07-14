import "./HeroStats.css";
import { useEffect, useState } from "react";

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;

    const step = Math.max(1, Math.floor(end / 80));

    const timer = setInterval(() => {
      current += step;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setValue(current);
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

export default function HeroStats() {
  return (
    <section className="hero-stats">

      <div className="stat-card">

        <h2>
          <Counter end={267} suffix="+" />
        </h2>

        <span>Cases Solved</span>

      </div>

      <div className="stat-card">

        <h2>
          <Counter end={99} suffix="%" />
        </h2>

        <span>Threat Detection</span>

      </div>

      <div className="stat-card">

        <h2>
          <Counter end={24} suffix="/7" />
        </h2>

        <span>Monitoring</span>

      </div>

      <div className="stat-card">

        <h2>
          <Counter end={100} suffix="%" />
        </h2>

        <span>Encrypted</span>

      </div>

    </section>
  );
}

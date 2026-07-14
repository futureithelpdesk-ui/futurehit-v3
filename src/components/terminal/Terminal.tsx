import "./Terminal.css";
import { useEffect, useState } from "react";

const lines = [
  "> Initializing Future OS...",
  "> Loading Cyber Modules...",
  "> Connecting Secure Network...",
  "> Accessing Intelligence Database...",
  "> Encrypting Session...",
  "> Establishing Quantum Tunnel...",
  "> Scanning Threat Matrix...",
  "> Access Granted.",
];

export default function Terminal() {
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      setOutput((prev) => [...prev, lines[i]]);
      i++;

      if (i >= lines.length) {
        clearInterval(timer);
      }
    }, 700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="terminal">

      <div className="terminal-header">

        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>

        <h3>Future Terminal</h3>

      </div>

      <div className="terminal-body">

        {output.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

      </div>

    </div>
  );
}

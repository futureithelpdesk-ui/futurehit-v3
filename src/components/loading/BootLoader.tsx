import { useEffect, useState } from "react";
import "./BootLoader.css";

const steps = [
  "Initializing AI Core...",
  "Connecting Secure Network...",
  "Decrypting Future Database...",
  "Loading Cyber Modules...",
  "Checking System Integrity...",
  "Access Granted ✔",
];

type BootLoaderProps = {
  onComplete: () => void;
};

export default function BootLoader({
  onComplete,
}: BootLoaderProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= steps.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1200);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setStep((value) => value + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [step, onComplete]);

  const progress = Math.min(
    Math.floor((step / steps.length) * 100),
    100
  );

  return (
    <div className="boot-screen">

      <div className="boot-box">

        <h1>FUTURE SECURITY TERMINAL</h1>

        <p className="version">
          Version 3.0
        </p>

        <div className="terminal">

          {steps.slice(0, step).map((item, index) => (
            <p key={index}>
              &gt; {item}
            </p>
          ))}

          {step < steps.length && (
            <p>
              &gt; {steps[step]}
              <span className="cursor">█</span>
            </p>
          )}

        </div>

        <div className="progress">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <p className="percent">
          {progress}%
        </p>

      </div>

    </div>
  );
}

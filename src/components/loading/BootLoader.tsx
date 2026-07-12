import { useEffect, useState } from "react";

const lines = [
  "Initializing FutureHit...",
  "Connecting to secure network...",
  "Decrypting encrypted files...",
  "Checking system integrity...",
  "Access Granted ✔"
];

type BootLoaderProps = {
  onComplete: () => void;
};

export default function BootLoader({
  onComplete,
}: BootLoaderProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= lines.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 800);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrent((value) => value + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [current, onComplete]);

  return (
    <div
      style={{
        background: "#000",
        color: "#00ff66",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "monospace",
        fontSize: "20px",
      }}
    >
      <div>
        {lines.slice(0, current).map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        {current < lines.length && (
          <p>
            {lines[current]}
            <span
              style={{
                animation: "blink 1s infinite",
              }}
            >
              █
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

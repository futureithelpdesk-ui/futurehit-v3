import { useEffect, useState } from "react";
import "./GlitchText.css";

type Props = {
  text: string;
};

export default function GlitchText({ text }: Props) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);

      setTimeout(() => {
        setGlitch(false);
      }, 180);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className={`glitch ${glitch ? "active" : ""}`}>
      {text}
    </h1>
  );
}

import "./HeroTyping.css";
import { useEffect, useState } from "react";

const texts = [
  "CYBER SECURITY",
  "DIGITAL INTELLIGENCE",
  "PRIVACY PROTECTION",
  "SYSTEM ANALYSIS",
  "ETHICAL RESEARCH",
];

export default function HeroTyping() {

  const [text, setText] = useState("");

  const [index, setIndex] = useState(0);

  useEffect(() => {

    let char = 0;

    const word = texts[index];

    const timer = setInterval(() => {

      char++;

      setText(word.slice(0, char));

      if (char >= word.length) {

        clearInterval(timer);

        setTimeout(() => {

          setText("");

          setIndex((p) => (p + 1) % texts.length);

        }, 1500);

      }

    }, 80);

    return () => clearInterval(timer);

  }, [index]);

  return (

    <div className="typing">

      {text}

      <span>|</span>

    </div>

  );

}

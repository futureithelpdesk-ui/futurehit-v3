import { useEffect, useState } from "react";

const words = [
  "Cyber Intelligence",
  "Digital Protection",
  "Black Hat Hacker",
  "Privacy Protection",
];

export default function HeroTyping() {
  const [text, setText] = useState("");

  const [index, setIndex] = useState(0);

  useEffect(() => {

    let i = 0;

    const current = words[index];

    const timer = setInterval(() => {

      i++;

      setText(current.slice(0, i));

      if (i >= current.length) {

        clearInterval(timer);

        setTimeout(() => {

          setIndex((v) => (v + 1) % words.length);

          setText("");

        }, 1500);

      }

    }, 80);

    return () => clearInterval(timer);

  }, [index]);

  return (

    <h3 className="typing">

      {text}

      <span>|</span>

    </h3>

  );

}

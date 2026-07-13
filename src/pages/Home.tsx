import { useState } from "react";

import BootLoader from "../components/loading/BootLoader";

import MatrixRain from "../components/effects/MatrixRain";
import Particles from "../components/effects/Particles";

import Hero from "../components/hero/Hero";

export default function Home() {

  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <BootLoader
        onComplete={() => setLoaded(true)}
      />
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <MatrixRain />

      <Particles />

      <Hero />
    </main>
  );
}

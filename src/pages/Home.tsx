import { useState } from "react";

import BootLoader from "../components/loading/BootLoader";

import MatrixRain from "../components/effects/MatrixRain";
import Particles from "../components/effects/Particles";
import MouseGlow from "../components/effects/MouseGlow";
import Scanlines from "../components/effects/Scanlines";

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
        position: "relative",
        minHeight: "100vh",
        background: "#000",
        overflowX: "hidden",
      }}
    >
      <MatrixRain />

      <Particles />

      <MouseGlow />

      <Scanlines />

      <Hero />
    </main>
  );
}

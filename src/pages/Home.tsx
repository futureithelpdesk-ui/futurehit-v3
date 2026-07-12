import { useState } from "react";
import BootLoader from "../components/loading/BootLoader";
import MatrixRain from "../components/effects/MatrixRain";
import GlitchText from "../components/effects/GlitchText";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <BootLoader onComplete={() => setLoaded(true)} />;
  }

  return (
    <>
      <MatrixRain />

      <main
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#000",
          color: "#fff",
        }}
      >
        <GlitchText text="FUTURE" />

        <p
          style={{
            marginTop: "20px",
            color: "#aaa",
            fontSize: "20px",
          }}
        >
          Welcome to FutureHit V3
        </p>
      </main>
    </>
  );
}

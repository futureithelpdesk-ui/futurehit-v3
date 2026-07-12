import { useState } from "react";
import BootLoader from "../components/loading/BootLoader";
import MatrixRain from "../components/effects/MatrixRain";

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
          color: "#00ff66",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            letterSpacing: "8px",
          }}
        >
          FUTURE
        </h1>

        <p
          style={{
            color: "#aaaaaa",
            marginTop: "20px",
            fontSize: "20px",
          }}
        >
          Welcome to FutureHit V3
        </p>
      </main>
    </>
  );
}

import { useState } from "react";
import BootLoader from "../components/loading/BootLoader";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return <BootLoader onComplete={() => setLoaded(true)} />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#00ff66",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "64px",
          letterSpacing: "5px",
        }}
      >
        FUTURE
      </h1>

      <p
        style={{
          marginTop: "15px",
          color: "#aaa",
        }}
      >
        Welcome to FutureHit V3
      </p>
    </main>
  );
}

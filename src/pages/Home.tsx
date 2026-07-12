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
        background: "#000",
        color: "#00ff66",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "bold",
        }}
      >
        FUTUREHIT
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "22px",
        }}
      >
        Welcome to FutureHit V3 🚀
      </p>
    </main>
  );
}

import "./Hero.css";

import HeroBackground from "./HeroBackground";
import HeroHUD from "./HeroHUD";
import HeroTyping from "./HeroTyping";
import HeroStats from "./HeroStats";
import HeroScroll from "./HeroScroll";
import HeroButtons from "./HeroButtons";
import CyberGrid from "./CyberGrid";
import GlitchText from "./GlitchText";
import Terminal from "../terminal/Terminal";

export default function Hero() {
  return (
    <section className="hero">

      <HeroBackground />

      <CyberGrid />

      <HeroHUD />

      <div className="hero-overlay"></div>

      <div className="hero-container">

        <div className="hero-left">

          <GlitchText />

          <HeroTyping />

          <p className="hero-description">

            Advanced Cyber Intelligence Platform built for monitoring,
            digital investigations, ethical security research and
            privacy protection.

          </p>

          <HeroButtons />

        </div>

        <div className="hero-right">

          <Terminal />

        </div>

      </div>

      <HeroStats />

      <HeroScroll />

    </section>
  );
}

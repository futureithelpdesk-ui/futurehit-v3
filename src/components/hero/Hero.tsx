import "./Hero.css";

import HeroBackground from "./HeroBackground";
import HeroHUD from "./HeroHUD";
import HeroTyping from "./HeroTyping";
import HeroStats from "./HeroStats";
import HeroScroll from "./HeroScroll";
import HeroButtons from "./HeroButtons";
import CyberGrid from "./CyberGrid";
import GlitchText from "./GlitchText";

export default function Hero() {

return(

<section className="hero">

<HeroBackground/>

<CyberGrid/>

<HeroHUD/>

<div className="hero-content">

<GlitchText/>

<HeroTyping/>

<p className="hero-description">

Digital Intelligence • Privacy Protection • Cyber Operations

</p>

<HeroButtons/>

<HeroStats/>

</div>

<HeroScroll/>

</section>

)

}

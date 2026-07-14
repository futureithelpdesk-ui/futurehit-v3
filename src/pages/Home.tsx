import Navbar from "../components/navbar/Navbar";

import Hero from "../components/hero/Hero";

import About from "../components/about/About";

import Skills from "../components/skills/Skills";

import Timeline from "../components/timeline/Timeline";

import Projects from "../components/projects/Projects";

import Contact from "../components/contact/Contact";

import Footer from "../components/footer/Footer";

import ScrollProgress from "../components/effects/ScrollProgress";

import MatrixRain from "../components/effects/MatrixRain";

import DigitalClock from "../components/effects/DigitalClock";

export default function Home(){

return(

<>

<MatrixRain/>

<ScrollProgress/>

<Navbar/>

<DigitalClock/>

<Hero/>

<About/>

<Skills/>

<Timeline/>

<Projects/>

<Contact/>

<Footer/>

</>

)

}

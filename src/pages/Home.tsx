import { useState } from "react";

import BootLoader from "../components/loading/BootLoader";

import MatrixRain from "../components/effects/MatrixRain";

import Hero from "../components/hero/Hero";

export default function Home(){

const [loaded,setLoaded]=useState(false);

if(!loaded){

return <BootLoader onComplete={()=>setLoaded(true)}/>

}

return(

<>

<MatrixRain/>

<Hero/>

</>

)

}

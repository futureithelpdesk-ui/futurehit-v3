import "./ScrollProgress.css";
import { useEffect, useState } from "react";

export default function ScrollProgress(){

const [progress,setProgress]=useState(0);

useEffect(()=>{

const scroll=()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=window.scrollY;

setProgress((current/total)*100);

};

window.addEventListener("scroll",scroll);

scroll();

return()=>window.removeEventListener("scroll",scroll);

},[]);

return(

<div

className="progress-bar"

style={{

width:`${progress}%`

}}

/>

)

}

import "./Navbar.css";
import { useEffect, useState } from "react";

const links = [
  "Home",
  "About",
  "Skills",
  "Timeline",
  "Projects",
  "Contact",
];

export default function Navbar() {

  const [active,setActive]=useState(false);

  useEffect(()=>{

    const scroll=()=>{

      setActive(window.scrollY>50);

    }

    window.addEventListener("scroll",scroll);

    return()=>window.removeEventListener("scroll",scroll);

  },[]);

  return(

<header className={active?"navbar active":"navbar"}>

<div className="logo">

FUTURE

</div>

<nav>

{

links.map((item,index)=>(

<a
href="#"
key={index}
>

{item}

</a>

))

}

</nav>

</header>

)

}

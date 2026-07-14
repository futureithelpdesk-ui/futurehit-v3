import "./DigitalClock.css";
import { useEffect,useState } from "react";

export default function DigitalClock(){

const [time,setTime]=useState("");

useEffect(()=>{

const update=()=>{

const now=new Date();

setTime(now.toLocaleTimeString());

};

update();

const timer=setInterval(update,1000);

return()=>clearInterval(timer);

},[]);

return(

<div className="digital-clock">

{time}

</div>

)

}

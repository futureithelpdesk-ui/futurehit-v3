import { useEffect, useState } from "react";
import "./MouseGlow.css";

export default function MouseGlow() {

    const [pos,setPos]=useState({
        x:0,
        y:0
    });

    useEffect(()=>{

        const move=(e:MouseEvent)=>{

            setPos({
                x:e.clientX,
                y:e.clientY
            });

        };

        window.addEventListener("mousemove",move);

        return()=>window.removeEventListener("mousemove",move);

    },[]);

    return(

        <div

        className="mouse-glow"

        style={{

            left:pos.x,

            top:pos.y

        }}

        />

    )

}

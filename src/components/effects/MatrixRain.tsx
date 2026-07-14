import "./MatrixRain.css";
import { useEffect, useRef } from "react";

export default function MatrixRain() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resize = () => {

      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;

    };

    resize();

    window.addEventListener("resize", resize);

    const chars =
      "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&@";

    const size = 18;

    const columns = Math.floor(canvas.width / size);

    const drops = Array(columns).fill(1);

    const draw = () => {

      ctx.fillStyle = "rgba(0,0,0,.08)";

      ctx.fillRect(0,0,canvas.width,canvas.height);

      ctx.fillStyle="#00ff88";

      ctx.font=size+"px monospace";

      for(let i=0;i<drops.length;i++){

        const text=chars[Math.floor(Math.random()*chars.length)];

        ctx.fillText(text,i*size,drops[i]*size);

        if(drops[i]*size>canvas.height&&Math.random()>0.98){

          drops[i]=0;

        }

        drops[i]++;

      }

    };

    const timer=setInterval(draw,35);

    return()=>{

      clearInterval(timer);

      window.removeEventListener("resize",resize);

    };

  },[]);

  return <canvas ref={canvasRef} className="matrix-rain"/>;

}

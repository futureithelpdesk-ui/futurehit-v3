import "./Timeline.css";

const timeline = [
  {
    year: "2023",
    title: "Started Journey",
    desc: "Started learning technology and exploring cybersecurity."
  },
  {
    year: "2024",
    title: "Security Research",
    desc: "Focused on ethical hacking, privacy and digital investigations."
  },
  {
    year: "2025",
    title: "Future Project",
    desc: "Started building Future as a cyber intelligence platform."
  },
  {
    year: "2026",
    title: "Future V3",
    desc: "Building advanced futuristic portfolio with modern UI."
  }
];

export default function Timeline(){

return(

<section className="timeline">

<p className="section-tag">

TIMELINE

</p>

<h2>

MY JOURNEY

</h2>

<div className="timeline-line">

{timeline.map((item,index)=>(

<div
className="timeline-card"
key={index}
>

<div className="year">

{item.year}

</div>

<h3>

{item.title}

</h3>

<p>

{item.desc}

</p>

</div>

))}

</div>

</section>

)

}

import { motion } from "framer-motion";
import "./Hero.css";

const stats = [
  {
    number: "267+",
    label: "Operations",
  },
  {
    number: "5",
    label: "Team Members",
  },
  {
    number: "99%",
    label: "Success Rate",
  },
  {
    number: "24/7",
    label: "Support",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      className="hero-stats"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >
      {stats.map((item) => (
        <div className="hero-card" key={item.label}>
          <h2>{item.number}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </motion.div>
  );
}

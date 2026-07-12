import { motion } from "framer-motion";
import "./Hero.css";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="hero">

      <HeroBackground />

      <div className="hero-content">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="hero-small"
        >
          FUTURE SECURITY SYSTEM
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="hero-title"
        >
          FUTURE
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .6,
            duration: .8,
          }}
          className="hero-subtitle"
        >
          BLACK HAT HACKER
        </motion.h2>

        <motion.p
          initial={{
            opacity:0,
          }}
          animate={{
            opacity:1,
          }}
          transition={{
            delay:1,
          }}
          className="hero-desc"
        >
          Digital Intelligence • Cyber Operations •
          Privacy Protection
        </motion.p>

        <motion.div
          initial={{
            opacity:0,
            y:30,
          }}
          animate={{
            opacity:1,
            y:0,
          }}
          transition={{
            delay:1.2,
          }}
          className="hero-buttons"
        >

          <button className="btn-green">
            ENTER SYSTEM
          </button>

          <button className="btn-outline">
            VIEW OPERATIONS
          </button>

        </motion.div>

      </div>

    </section>
  );
}

import { motion } from "framer-motion";
import "./Hero.css";

export default function HeroTitle() {
  return (
    <div className="hero-title-wrapper">

      <motion.p
        className="hero-tag"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >
        CYBER INTELLIGENCE PLATFORM
      </motion.p>

      <motion.h1
        className="hero-main-title"
        initial={{
          opacity: 0,
          scale: .8,
          y: 80
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 1
        }}
      >
        FUTURE
      </motion.h1>

      <motion.h2
        className="hero-main-subtitle"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: .5
        }}
      >
        BLACK HAT HACKER
      </motion.h2>

      <motion.p
        className="hero-description"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: .8
        }}
      >
        Digital Intelligence • Privacy Protection • Cyber Operations
      </motion.p>

    </div>
  );
}

import { motion } from "framer-motion";
import "./Hero.css";

export default function HeroButtons() {

  return (

    <motion.div

      className="hero-buttons"

      initial={{
        opacity:0,
        y:40
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        delay:1
      }}

    >

      <button className="btn-green">

        ENTER SYSTEM

      </button>

      <button className="btn-outline">

        VIEW OPERATIONS

      </button>

    </motion.div>

  )

}

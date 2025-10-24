"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { staggerContainer } from "../../utils/motion";
import { TypingText } from "../components/CustomTexts";
import * as styles from "../../styles/styles";

// Define properly typed variants
const textVariants: Variants = {
  hidden: {
    x: 80,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 1,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    x: -80,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export default function Event() {
  return (
    <section
      id="section-events"
      className={`${styles.yPaddings} relative z-10`}
    >
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={textVariants}
          className="flex-[0.75] text-yellow-400 flex justify-center flex-col"
        >
          <TypingText title="|Dein Event" textStyles="" />
          <h1 className="text-[3rem] text-yellow-500">dein event</h1>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/Crowdparty.png"
            alt="event-party"
            width={500}
            height={500}
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Features2 from'../components/Feature2';
import * as styles from '../../styles/styles';
import { staggerContainer } from '../../utils/motion';
import { TypingText } from '../components/CustomTexts';

const Philosophy = () => {
  return (
    <section>
      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Die Philosophie" textStyles="text-center" />
        <Features2/>
      </motion.div>
    </section>
  );
};

export default Philosophy;

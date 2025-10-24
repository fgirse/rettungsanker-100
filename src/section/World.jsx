'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../../styles/styles';
import { TitleText, TypingText } from '../components/CustomTexts';
import { fadeIn, staggerContainer } from '../../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="|Dein Treffpunkt" textStyles="text-center" />
      <TitleText
        title={(
          <>Dein Treffpunkt in Freiburg
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image src="/Hero.png" alt="map" width={800} height={550} className="hidden border-8  rounded-2xl w-full h-full object-cover lg:block" />
        <Image src="/Hero3.png" alt="map" width={800} height={550} className="border-8 border-gray-800 rounded-2xl w-full h-full object-contain md:hidden"/>
      </motion.div>
    </motion.div>
  </section>
);

export default World;

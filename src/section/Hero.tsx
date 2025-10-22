/* trunk-ignore-all(prettier) */
'use client';
import { motion, type Variants } from 'framer-motion';
import * as styles from '../../styles/styles';
import { slideIn, staggerContainer, textVariant } from '../../utils/motion';
import Image from 'next/image';

// Consider extracting complex classNames for better readability
const heroSectionClasses = `${styles.yPaddings} mx-auto bg-hero relative top-[0vh] bg-contain h-screen bg-no-repeat lg:h-screen lg:bg-no-repeat `;

const containerClasses = `${styles.innerWidth} mx-auto flex flex-col`;

const logoContainerClasses = 'mx-auto mt-[1vh] bg-gray-900/30 w-[100vw] h-[30vh] flex flex-col items-center justify-between';

const Hero = () => (
  <section className={heroSectionClasses}>
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={containerClasses}
    >
      <div className={logoContainerClasses}>
        <Image src="/LogoNeu.png"  width={500} height={300} alt="LogoNeu" className="object-contain w-[33vw] h-[24vh] md:mt-[0vh] md:w-[55vw] md:h-[36vh] lg:hidden "/>

        <div className="flex justify-center items-center flex-col relative z-10 ">
          <motion.h1
            variants={textVariant(1.1) as Variants}
            className="mt-[17vh] mb-[3vh] headingE text-shadow-lg font-bowlby text-yellow-50 text-[9.66rem] md:mt-[6vh] sd:text-8xl md:text-[13.33rem] lg:-mt-[5vh] lg:mb-[2vh]  lg:text-[19rem] 2xl:text-[23rem]"
          >
            die
          </motion.h1>
          <motion.div
            variants={textVariant(1.2) as Variants}
            className="mt[3-vh] flex flex-row justify-center items-center"
          >
            <motion.h1 className="-mt-[12vh] headingA lg:-mt-[18vh] text-[2.9rem] sd:text-[5.66rem] md:text-[6rem] lg:text-[11rem] font-bowlby text-shadow-lg text-red-700 2xl:text-[12rem]">
              kiezkneipe
            </motion.h1>

          </motion.div>
        </div>
      </div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1) as Variants}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
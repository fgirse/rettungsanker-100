'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Tooltip from "../../utils/SimpleTooltip";
import * as styles from '../../styles/styles';
import { fadeIn, staggerContainer } from '../../utils/motion';
import { TypingText } from "../components/CustomTexts";

const About = () => (
  <section id="section-about" className={`${styles.yPaddings} relative z-10`}>
    <div className="gradient-02 z-0"></div>
    <motion.div
      variants={staggerContainer(0.1, 0.1)} // Call the function with parameters
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText  title="| about us" textStyles="text-center mt-[7vh] lg:mt-[0vh]" />

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1) as Variants}
        className="mt-2 font-normal sm:text-[32px] text-[20px] text-center text-gray-500"
      >
        <h1 className="text-[2.5rem] lg:text-[4rem] font-extrabold text-yellow-500 text-center">&quot;Moin Moin&quot;</h1>
        <div className='w-36 h-36 md:w-[20vw] lg:w-[20vh]'>
          <Image
          src="/lighthouse3.png"
          height="320"
          width="230"
          alt="Leuchtturm"
          className="shape-lighthouse h-48 w-48"
        /></div>

        <p className = "text-[1.3rem] text-gray-300 md:text-[1.33rem] lg:text-[1.66rem]"> In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im
        Herzen von Freiburg ein Lokal eröffnet, welches es so südlich der Elbe
        wohl kein zweites Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist
        der im Zentrum der Altstadt gelegene Rettungsanker-Freiburg idealer
        Treffpunkt um nach Feierabend etwas zu entspannen und nette Leute
        kennenzulernen. Wir sind stolz auf unser buntes, internationales
        Publikum. <br /> Unser Rettungsanker ist auch ideale Location zur
        Durchführung Ihres privaten oder geschäftlichen Events &nbsp;Sprechen
        Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns



        email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen.</p>

        <div className="flex flex-row justify-center items-center gap-x-5">
        <Image
          src="/portraitmick.png"
          height="80"
          width="60"
          alt="Portrait"
          className=" mt-5 rounded-full portraitMick"
        />
        <p className = "text-gray-300 text-[1.0rem] md:text-[1.33rem] lg:text-[1.66rem]"> Michael Schreck und das Team des Rettungsankers</p>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center">
          <Tooltip content="sende email an rettungsanker-freiburg@gmx.de" direction="top">
            <button className="lg-justify-between relative mx-auto mb-5 mt-6 flex w-52 flex-row items-center justify-center gap-x-3 rounded-lg border border-transparent bg-yellow-500 px-4 py-2 font-sans text-2xl font-medium  text-gray-200 transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:scale-110 hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-3xl lg:mb-20 lg:flex lg:w-80 lg:flex-row lg:items-center lg:text-2xl xl:mt-2" type="button">
              <svg
                className="w-16 lg:w-20 "
                fill="#ffffff"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?">email</a> </button>
          </Tooltip>
        </div>
        <p className="text-yellow-500 text-center">scrolling down</p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1) as Variants}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-7 object-contain mt-7"
      ></motion.img>
    </motion.div>
  </section>
);export default About;
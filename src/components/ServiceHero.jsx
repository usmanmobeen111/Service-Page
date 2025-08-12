import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const ServiceHero = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row items-center justify-center mt-[15vh] md:mt-0 md:gap-8 px-4 md:px-20" id="home" >
      {/* Left Side - Text */}
      <motion.div
        className="flex flex-col text-center md:text-start items-center md:items-start justify-center gap-4 w-full md:w-[40vw]"
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          variants={textVariants}
          custom={0}
          className="text-2xl text-primary font-bold"
        >
          What We Do
        </motion.h2>

        <motion.h1
          variants={textVariants}
          custom={1}
          className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-snug"
        >
          We Build Scalable, Stunning Web Solutions
        </motion.h1>

        <motion.p
          variants={textVariants}
          custom={2}
          className="text-slate-600 max-w-lg"
        >
          From modern front-ends to full-stack applications, we help businesses turn ideas into high-impact digital products that delight users and drive growth.
        </motion.p>

        <motion.div
          variants={textVariants}
          custom={3}
          className="flex gap-4 mt-4"
        >
          <a
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/85 to-secondary/85 text-lg text-white hover:from-primary hover:to-secondary transition duration-150 cursor-pointer"
            href="#services"
          >
            Services
          </a>
          <a
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/85 to-secondary/85 text-lg text-white hover:from-primary hover:to-secondary transition duration-150 cursor-pointer"
            href="#testimonials"
          >
            Testimonials
          </a>
        </motion.div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="flex items-center justify-center w-3/4 md:w-[40vw]"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src="/hero.svg" alt="Hero Illustration" className="w-full drop-shadow-lg" />
      </motion.div>
    </div>
  );
};

export default ServiceHero;

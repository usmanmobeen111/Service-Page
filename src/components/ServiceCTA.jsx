import React from 'react'
import ctaData from '../data/ctaData'
import {motion} from "framer-motion"

const ServiceCTA = () => {
  return (
     <section className="w-full bg-secondary/10 py-16 px-6 flex justify-center items-center" id='cta'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          {ctaData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl mb-8"
        >
          {ctaData.description}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary/85 to-secondary/85 text-lg text-white hover:from-primary hover:to-secondary transition duration-150 cursor-pointer"
        >
          {ctaData.buttonText}
        </motion.button>
      </motion.div>
    </section>
  )
}

export default ServiceCTA

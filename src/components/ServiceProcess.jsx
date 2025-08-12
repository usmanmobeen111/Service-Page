import React from "react";
import { motion } from "framer-motion";
import processData from "../data/processData";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const ServiceProcess = () => {
  return (
    <section className="bg-secondary/10 py-16 px-6 md:px-12" id="process">
      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-primary font-bold text-2xl uppercase tracking-wide">
          How We Work
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
          Our Simple 4-Step Service Process
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We make it easy for you to get results — from our first chat to delivering the final product.
        </p>
      </motion.div>

      {/* Steps */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {processData.map((step) => (
          <motion.div
            key={step.step}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 text-center relative transition-shadow hover:shadow-2xl"
          >
            {/* Step Number */}
            <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
              {step.step}
            </div>
            {/* Title */}
            <h3 className="mt-4 font-semibold text-lg text-slate-800">{step.title}</h3>
            {/* Description */}
            <p className="text-slate-500 text-sm mt-2">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServiceProcess;

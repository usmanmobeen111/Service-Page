import React from "react";
import servicesData from "../data/servicesData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServiceGrid = () => {
  return (
    <motion.div
    id="services"
      className="bg-secondary/10 py-16 px-6 md:px-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-primary font-bold text-2xl uppercase tracking-widest">
          Our Services
        </h2>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          Delivering Excellence in Every Project
        </h1>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {servicesData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            className="bg-white w-[90vw] sm:w-[75vw] md:w-full rounded-xl shadow-lg overflow-hidden flex flex-col transition transform hover:-translate-y-2 hover:shadow-xl duration-300"
            whileHover={{ scale: 1.03 }}
          >
            {/* Full-width top image */}
            <div className="w-full h-48">
              <img
                src={service.icon}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceGrid;

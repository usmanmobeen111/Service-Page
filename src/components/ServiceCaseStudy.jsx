import React from "react";
import { motion } from "framer-motion";
import caseStudies from "../data/caseStudies";

const ServiceCaseStudy = () => {
  return (
    <section className="bg-secondary/10 py-16 px-6 md:px-12" id="case-study">
      {/* Section Heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-primary uppercase font-bold text-2xl tracking-wide">
          Case Studies
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-2">
          Real Results for Real Clients
        </h2>
        <p className="text-slate-600 mt-4">
          We don’t just talk about results — we deliver them. Here’s how we transformed our client’s business.
        </p>
      </motion.div>

      {/* Case Study Cards */}
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {/* Image */}
            <motion.div
              className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col justify-center"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-primary text-sm font-semibold uppercase tracking-wide">
                {study.client}
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
                {study.title}
              </h2>
              <p className="text-slate-600 mt-4">{study.description}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 mt-6">
                {study.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col bg-gradient-to-br from-primary to-secondary text-white px-4 py-3 rounded-lg shadow-md w-fit"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-lg font-bold">{stat.value}</span>
                    <span className="text-xs uppercase tracking-wide">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCaseStudy;

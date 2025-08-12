import React from 'react'
import testimonialsData from '../data/testimonialsData'
import {motion} from "framer-motion"
const ServiceTestimonials = () => {
  return (
    <div id='testimonials'>
      <section className="py-16 text-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-4 text-primary"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 mb-12 max-w-2xl mx-auto"
        >
          We value the trust our clients put in us and strive to deliver
          exceptional results every time.
        </motion.p>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonialsData.map((t, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="bg-gray-300 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform duration-500"
            >
              {/* Image */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-primary object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-600">{t.role}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-600 leading-relaxed">{t.feedback}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </div>
  )
}

export default ServiceTestimonials

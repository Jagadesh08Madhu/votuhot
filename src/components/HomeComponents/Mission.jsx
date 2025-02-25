import React from "react";
import { motion } from "framer-motion";
import votohot from "../../assets/votohot.webp";

export default function Mission() {
  return (
    <section>
      <div className="mx-5 py-10 lg:mx-20">
        {/* Heading Animation */}
        <motion.h1
          className="text-center text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{once:true , amount: 0.5}}
        >
          VOTOHOT - Secure, Scalable and Redundant
        </motion.h1>

        {/* Subtext Animation */}
        <motion.p
          className="text-center text-base mt-5 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{once:true , amount: 0.5}}
        >
          Safeguard Your Servers or Hosting Space Across Multiple Locations for Unmatched Protection.
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Text Section */}
          <motion.div
            className="flex flex-col gap-5 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{once:true , amount: 0.5}}
          >
            <h1 className="text-3xl lg:text-4xl">Data Center's Mission</h1>
            <p className="text-lg">
              VOTOHOT - Next-Gen Data Center Solutions for Speed, Reliability & Security, Backed by Multi-Site Infrastructure and Secure
              Data Redundancy for Unmatched Protection.
            </p>
            <p className="text-lg">
              Our state-of-the-art facilities ensure top-tier security, constant uptime and resilience against unforeseen circumstances,
              making us a trusted partner in safeguarding your critical data assets.
            </p>

            {/* Button Animation */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ letterSpacing: "7px" }}
              className="bg-[#7049C3] w-fit px-10 py-2 text-white rounded-md"
            >
              Know More
            </motion.button>
          </motion.div>

          {/* Image Animation */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{once:true , amount: 0.5}}
          >
            <img className="rounded-3xl" src={votohot} alt="Votohot Data Center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

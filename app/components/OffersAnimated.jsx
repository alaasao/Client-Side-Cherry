"use client";
import React from "react";
import { motion } from "framer-motion";
const OffersAnimated = () => {
  return (
    <div>
      <motion.div
        className=" offer-one good"
        initial={{ x: 0 }}
        whileInView={{ x: 10000 }}
        transition={{
          duration: 5,
          ease: [0.4, 0, 0.6, 1],
        }}
      >
        check our offers
      </motion.div>
      <motion.div
        className=" offer-two good  "
        initial={{ x: 0 }}
        whileInView={{ x: 10000 }}
        transition={{
          duration: 5,
          delay: 0.1,
          ease: [0.4, 0, 0.6, 1],
        }}
      >
        befor it is too late
      </motion.div>
    </div>
  );
};

export default OffersAnimated;

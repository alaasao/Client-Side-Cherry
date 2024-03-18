"use client";
import React from "react";
import { motion } from "framer-motion";

interface AnimationVariants {
  initial: { opacity: number; y?: number };
  animate: {
    opacity: number;
    y?: number;
    transition: { delay: number; staggerChildren: number };
  };
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  sep?: string;
}

const quot = {
  initial: {
    opacity: 0,
    y:0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  sep = " ",
}: AnimatedTextProps) => {
  return (
    <div className="flex items-center justify-center  overflow-hidden text-center ">
      <motion.p
        className={`inline-block   ${className} `}
        variants={quot}
        initial="initial"
        animate="animate"
      >
        {text.split(sep).map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default AnimatedText;

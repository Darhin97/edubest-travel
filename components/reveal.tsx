import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "@/lib/anim";

interface RevealProps {
  children: React.ReactElement;
  width?: "100%" | "fit-content";
}

const Reveal = ({ children, width }: RevealProps) => {
  return (
    <div style={{ width, overflow: "hidden", position: "relative" }}>
      <motion.div
        variants={slideUp}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;

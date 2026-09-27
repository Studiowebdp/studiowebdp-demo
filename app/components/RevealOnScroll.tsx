"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  /** Direzione di ingresso */
  from?: "bottom" | "top" | "left" | "right";
  /** Distanza in px */
  distance?: number;
  /** Durata in secondi */
  duration?: number;
  className?: string;
};

export default function RevealOnScroll({
  children,
  delay = 0,
  from = "bottom",
  distance = 40,
  duration = 0.7,
  className,
}: Props) {
  const initial = {
    opacity: 0,
    y: from === "bottom" ? distance : from === "top" ? -distance : 0,
    x: from === "right" ? distance : from === "left" ? -distance : 0,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // easing tipo StringTune (f-cubic)
      }}
    >
      {children}
    </motion.div>
  );
}
"use client";

import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  /** Ritardo iniziale (s) */
  delay?: number;
  /** Ritardo tra una parola e l'altra (s) */
  stagger?: number;
};

export default function SplitText({
  text,
  className = "",
  delay = 0,
  stagger = 0.08,
}: Props) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
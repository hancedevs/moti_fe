"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type AnimateInViewProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function AnimateInView({
  children,
  className,
  delay = 0,
  y = 20,
}: AnimateInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

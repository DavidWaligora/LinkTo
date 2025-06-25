"use client";
import { motion } from "framer-motion";

interface EnterAnimationProps {
  children: React.ReactNode;
  delay?: number;
}

export default function EnterAnimation({
  children,
  delay = 0,
}: EnterAnimationProps) {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      initial={{ y: 10, opacity: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
}

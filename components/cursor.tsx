"use client";

import { useContext } from "react";
import { motion } from "framer-motion";

import { CursorContext } from "@/components/cursor-context";

export const Cursor = () => {
  const cursorContext = useContext(CursorContext);

  const cursorVariants = cursorContext?.cursorVariants;
  const cursorBackground = cursorContext?.cursorBackground;

  if (!cursorVariants || !cursorBackground) {
    return null;
  }

  return (
    <motion.div
      variants={cursorVariants}
      animate={cursorBackground}
      className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-30 rounded-full"
    />
  );
};

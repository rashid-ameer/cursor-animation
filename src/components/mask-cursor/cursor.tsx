"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/use-mouse-position";

function Cursor() {
  const { x, y } = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 250 : 40;
  return (
    <motion.div
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ ease: "backOut", type: "tween", duration: 0.5 }}
      className={`${styles.mask}`}>
      <p
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        I specializes in crafting user-friendly interfaces with a focus on
        performance, accessibility, and user-centric design principles.
      </p>
    </motion.div>
  );
}
export default Cursor;

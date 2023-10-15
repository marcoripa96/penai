'use client';

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AutoResizingTextarea = HTMLMotionProps<'textarea'>;

export const AutoResizingTextarea = ({ className, value, ...props }: AutoResizingTextarea) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const controls = useAnimation();

  // Resize the textarea according to its content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px'; // Reset height to recalculate
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
      // controls.start({ height: scrollHeight });
    }
  }, [value, controls]);

  return (
    <motion.textarea
      ref={textareaRef}
      className={cn("w-full resize-none overflow-hidden outline-none", className)}
      animate={controls}
      initial={false}
      value={value}
      {...props}
    />
  );
};
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * @function MotionWrapper
 * @description A wrapper component that applies motion effects to its children.
 * @param children
 * @returns {ReactNode}
 */
export default function MotionWrapper({ children }: { children: ReactNode }): ReactNode {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
}

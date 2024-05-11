import React from "react";
import { motion } from "framer-motion";

export default function Transition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.5 }}>
            {children}
        </motion.div>
    );
}
import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

// Fixed AnimatedDecoration component with proper animation setup
export const AnimatedDecoration = () => {
  return (
    <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 pointer-events-none">
      <div className="relative h-full w-full">
        <motion.div 
          className="absolute right-48 top-1/2 w-64 h-80 bg-white/90 backdrop-blur-sm rounded-sm border border-divider shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute top-6 left-0 right-0 flex flex-col items-center">
            <motion.div 
              className="w-32 h-8 mb-2 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Icon icon="lucide:scale" className="text-primary-600 text-2xl mr-2" />
              <span className="font-serif text-lg font-semibold text-primary-600">CLAW</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
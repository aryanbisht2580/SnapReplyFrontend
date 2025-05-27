import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, disabled, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "relative overflow-hidden px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  const primaryClasses = "bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl";
  const secondaryClasses = "bg-black text-white border border-white hover:bg-white hover:text-black shadow-lg hover:shadow-xl";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
        animate={{ translateX: "200%" }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};

export default AnimatedButton;

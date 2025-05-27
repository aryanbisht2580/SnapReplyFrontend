import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedSelect = ({ label, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-4 bg-black/5 border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-all duration-300 text-left flex justify-between items-center"
        >
          <span className="text-black">{value || `Select ${label}`}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-4 h-4 rotate-90" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-xl shadow-xl z-50"
            >
              {options.map((option, index) => (
                <motion.button
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className="w-full p-3 text-left hover:bg-gray-100 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
                  whileHover={{ backgroundColor: '#f3f4f6' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.1, delay: index * 0.05 }}
                >
                  {option}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedSelect;

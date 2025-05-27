import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedInput = ({ label, value, onChange, multiline = false, rows = 1 }) => {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div 
      className="relative w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            rows={rows}
            className="w-full p-4 bg-black/5 border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-all duration-300 resize-none text-black placeholder-gray-500"
            placeholder={`Enter your ${label.toLowerCase()}...`}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="w-full p-4 bg-black/5 border-2 border-gray-300 rounded-xl focus:border-black focus:outline-none transition-all duration-300 text-black placeholder-gray-500"
            placeholder={`Enter your ${label.toLowerCase()}...`}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedInput;

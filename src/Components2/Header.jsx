import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import logox from '../assets/logox.png';

const Header = () => {
  return (
    <motion.header 
      className="relative overflow-hidden bg-gradient-to-r bg-black text-white py-8"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="flex items-center justify-center gap-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Mail className="w-8 h-8" />
          <img src={logox} alt="Logo" className="h-16" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
        </motion.div>
        <motion.p 
          className="text-center text-gray-300 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          AI-powered email reply generator
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;

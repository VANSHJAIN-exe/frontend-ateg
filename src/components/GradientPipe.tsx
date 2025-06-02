import React from 'react';
import { motion } from 'framer-motion';

const GradientPipe: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Blue Pipe */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[15%] left-[10%] w-[60%] h-[15vh] rounded-full bg-gradient-to-r from-blue-600/10 to-blue-400/30"
        style={{ filter: 'blur(40px)' }}
      />
      
      {/* Orange Pipe */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-[20%] right-[10%] w-[50%] h-[15vh] rounded-full bg-gradient-to-r from-orange-500/30 to-orange-300/10"
        style={{ filter: 'blur(40px)' }}
      />
      
      {/* Vertical Connector */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute left-[30%] top-[25%] w-[8vh] h-[40%] rounded-full bg-gradient-to-b from-blue-400/20 to-orange-400/20 origin-top"
        style={{ filter: 'blur(30px)' }}
      />
      
      {/* Animated Glowing Points */}
      <motion.div
        animate={{ 
          y: [0, 100, 200, 300, 400, 500],
          opacity: [0.8, 0.6, 0.8, 0.6, 0.8, 0] 
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="absolute left-[30%] top-[15%] w-5 h-5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
        style={{ filter: 'blur(5px)' }}
      />
      
      <motion.div
        animate={{ 
          x: [0, 100, 200, 300, 400, 500],
          opacity: [0.8, 0.6, 0.8, 0.6, 0.8, 0] 
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "loop",
          delay: 1
        }}
        className="absolute bottom-[20%] right-[10%] w-5 h-5 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50"
        style={{ filter: 'blur(5px)' }}
      />
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-white via-white to-transparent opacity-70"></div>
    </div>
  );
};

export default GradientPipe;
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <motion.div 
        className="fixed w-[800px] h-[800px] bg-white/5 -top-96 -left-96 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 50, 200, 0],
          y: [0, 50, 200, 100, 0],
          scale: [1, 1.2, 1.1, 1.3, 1],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="fixed w-[600px] h-[600px] bg-white/5 -bottom-64 -right-64 rounded-full blur-3xl"
        animate={{ 
          x: [0, -150, -75, -200, 0],
          y: [0, -100, -200, -50, 0],
          scale: [1, 1.4, 1.2, 1.5, 1],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <Navbar />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
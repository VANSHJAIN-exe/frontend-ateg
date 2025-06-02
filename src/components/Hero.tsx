import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full mt-52">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-center leading-tight">
            Introducing ATEG,<br />The Gaming Editor
          </h1>
          <p className="text-2xl text-white/60 max-w-3xl mx-auto">
            Transform your gameplay into cinematic masterpieces. One click, endless possibilities. Your Valorant highlights deserve the spotlight they deserve.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mb-32"
        >
          <Link
            to="/editor"
            className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Get Started <ArrowRight className="h-6 w-6" />
          </Link>
        </motion.div>
      </div>

      {/* Credits Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-auto mb-8 text-center"
      >
        <p className="text-white/40 text-sm flex items-center justify-center gap-2">
          Made with <Heart className="h-4 w-4 text-red-500" /> by
          <a 
            href="https://github.com/ShikharSomething" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> Shikhar
          </a>
          ,
          <a 
            href="https://github.com/VANSHJAIN-exe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> Vansh
          </a>
          and
          <a 
            href="https://github.com/Ved235" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/10"
          >
            <Github className="h-4 w-4" /> Vedant
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
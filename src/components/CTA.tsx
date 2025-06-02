import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Ready to Create Your Valorant Montage?
              </h2>
              <p className="text-xl text-white/60 mb-8">
                Join thousands of players who are already creating stunning Valorant montages with VS1.
                Start your free trial today and transform your gameplay into cinematic masterpieces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/editor"
                  className="btn-primary"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/editor"
                  className="btn-secondary"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
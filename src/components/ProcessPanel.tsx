import React from 'react';
import { motion } from 'framer-motion';
import { Video, Music, Play, CheckCircle2 } from 'lucide-react';

const ProcessPanel: React.FC = () => {
  const steps = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Upload Gameplay",
      description: "Drop your raw Valorant gameplay footage"
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Add Music",
      description: "Select your favorite track for the montage"
    },
    {
      icon: <Play className="h-6 w-6" />,
      title: "Generate",
      description: "Click and let VS1 create your masterpiece"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mb-12"
    >
      <div className="card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
        <div className="relative">
          <h2 className="text-2xl font-medium mb-8 text-center">Simple 3-Step Process</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-medium mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-[2px] bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-4 text-sm text-white/60">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              <span>VS1 Model automatically detects and enhances your best moments</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessPanel; 
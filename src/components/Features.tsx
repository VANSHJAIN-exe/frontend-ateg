import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Zap, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: "Cinematic Effects",
    description: "Apply Valorant's signature cinematic effects with one click - perfect for clutch moments and ace plays."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Processing",
    description: "Process your gaming clips 10x faster than manual editing, perfect for quick montage creation."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Smart Kill Detection",
    description: "AI automatically detects kills and highlights them with dynamic Valorant-style effects."
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Game-Aware Effects",
    description: "Effects that adapt to your gameplay, enhancing kills, abilities, and ultimate moments."
  }
];

const Features: React.FC = () => {
  return (
    <section className="section relative\" id="features">
      <div className="noise" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <div className="mb-6 p-3 rounded-lg bg-white/5 w-fit">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Video, Music, Play, Sparkles } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes VS1 different from other editing tools?",
      answer: "VS1 is specifically trained on Valorant gameplay clips, understanding the game's unique mechanics and moments. It automatically detects and enhances your best plays, creating cinematic transitions and effects that match the game's aesthetic."
    },
    {
      question: "Do I need any editing experience?",
      answer: "Not at all! VS1 is designed to be completely automated. Just upload your gameplay and music, and our AI will create a professional-quality montage for you."
    },
    {
      question: "What video formats are supported?",
      answer: "VS1 supports all major video formats including MP4, MOV, and AVI. We recommend using high-quality recordings for the best results."
    },
    {
      question: "Can I customize the editing style?",
      answer: "Yes! While VS1 provides automatic editing, you can adjust various parameters like transition intensity, color grading, and music sync to match your preferred style."
    }
  ];

  const steps = [
    {
      icon: <Video className="h-8 w-8" />,
      title: "Upload Gameplay",
      description: "Drop your raw Valorant gameplay footage",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Add Music",
      description: "Select your favorite track for the montage",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Generate",
      description: "Click and let VS1 create your masterpiece",
      color: "from-orange-500/20 to-orange-600/20"
    }
  ];

  return (
    <section className="py-24 bg-black" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Everything you need to know about VS1 and creating Valorant montages
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-6 w-6" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-white/60">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Vertical Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h2>
            <p className="text-xl text-white/60">
              Create stunning Valorant montages in three simple steps
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl opacity-50`} />
                <div className="relative p-8 rounded-2xl border border-white/10 bg-black/50">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-2">{step.title}</h3>
                      <p className="text-white/60">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full w-[2px] h-8 bg-gradient-to-b from-blue-500/20 to-purple-500/20" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center justify-center gap-4 text-sm text-white/60">
              <Sparkles className="h-5 w-5 text-yellow-500" />
              <span>VS1 Model automatically detects and enhances your best moments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
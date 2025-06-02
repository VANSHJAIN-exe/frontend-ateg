import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Cpu, Braces } from 'lucide-react';

const ModelShowcase: React.FC = () => {
  return (
    <section className="section relative" id="model">
      <div className="noise" />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-sm text-white/80">Beta</span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8">
            Meet VS1
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Our proprietary AI model, trained on thousands of Valorant gameplay clips and official cinematics. VS1 understands your gameplay and applies stunning Valorant-style effects with unmatched precision.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-lg bg-white/5">
                <Code className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-xl mb-2">Python Integration</h3>
                <p className="text-gray-400">
                  Seamlessly integrate VS1 into your workflow with our Python SDK. Perfect for batch processing multiple clips.
                </p>
              </div>
            </div>

            <div className="card bg-white/[0.02] mt-8">
              <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Coming Soon
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Cpu className="h-4 w-4" />
                  <span>Advanced kill streak detection</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Braces className="h-4 w-4" />
                  <span>Custom agent-specific effects</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="card overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs">
                VS1 Model Beta
              </div>
            </div>
            
            <div className="space-y-3 font-mono text-sm">
              <div className="text-white/80">$ ateg.vs1 --input valorant_clip.mp4</div>
              <div className="text-gray-500"># Initializing VS1 Model...</div>
              <div className="text-gray-500"># Detecting gameplay moments...</div>
              <div className="text-white/60">Processing: [##########] 100%</div>
              <div className="text-white/80">✨ Montage ready! Saved as valorant_clip_vs1.mp4</div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/60">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>VS1 Model Active</span>
                </div>
                <div className="flex items-center gap-2 text-white/60 mt-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Cinematic Effects Applied</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModelShowcase;
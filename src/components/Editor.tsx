import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Video, Music, Settings, Play, Pause, Loader2 } from 'lucide-react';

const Editor: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleVideoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setVideoFile(file);
  }, []);

  const handleAudioUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAudioFile(file);
  }, []);

  const handleProcess = async () => {
    if (!videoFile || !audioFile) return;
    
    setIsProcessing(true);
    setProgress(0);
    
    // Simulate processing
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProgress(i);
    }
    
    setIsProcessing(false);
  };

  return (
    <section className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Create Your Montage
          </h1>
          <p className="text-gray-400 text-lg">
            Upload your Valorant gameplay and music to create an epic montage
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Video Upload */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Video className="h-6 w-6" />
                <h2 className="text-xl font-medium">Gameplay Video</h2>
              </div>
              
              <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center">
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="hidden"
                  id="video-upload"
                />
                <label
                  htmlFor="video-upload"
                  className="cursor-pointer block"
                >
                  <Upload className="h-8 w-8 mx-auto mb-4 text-white/60" />
                  <p className="text-white/80 mb-2">
                    {videoFile ? videoFile.name : 'Drop your gameplay video here'}
                  </p>
                  <p className="text-sm text-white/40">
                    MP4, MOV, or AVI up to 500MB
                  </p>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Audio Upload */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <Music className="h-6 w-6" />
                <h2 className="text-xl font-medium">Background Music</h2>
              </div>
              
              <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center">
                <input
                  type="file"
                  accept="audio/*"
                  onChange={handleAudioUpload}
                  className="hidden"
                  id="audio-upload"
                />
                <label
                  htmlFor="audio-upload"
                  className="cursor-pointer block"
                >
                  <Upload className="h-8 w-8 mx-auto mb-4 text-white/60" />
                  <p className="text-white/80 mb-2">
                    {audioFile ? audioFile.name : 'Drop your music here'}
                  </p>
                  <p className="text-sm text-white/40">
                    MP3 or WAV up to 50MB
                  </p>
                </label>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Processing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Settings className="h-5 w-5" />
                <h2 className="text-xl font-medium">Processing Options</h2>
              </div>
              <button
                onClick={handleProcess}
                disabled={!videoFile || !audioFile || isProcessing}
                className={`btn-primary flex items-center gap-2 ${
                  (!videoFile || !audioFile || isProcessing) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Play className="h-5 w-5" />
                    Create Montage
                  </>
                )}
              </button>
            </div>

            <AnimatePresence>
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-4"
                >
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-white/60">
                    <span>Processing your montage...</span>
                    <span>{progress}%</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Editor; 
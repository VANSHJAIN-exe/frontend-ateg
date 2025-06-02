import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Video, Music, Settings, Play, Pause, Loader2, AlertCircle, Target, Scissors, Film } from 'lucide-react';

const API_BASE_URL = 'http://localhost:5000/api';

interface ProcessingStatus {
  status: 'processing' | 'completed' | 'failed';
  progress: number;
  stage?: 'detecting_kills' | 'extracting_clips' | 'generating_montage';
  kill_count?: number;
  clip_count?: number;
  error?: string;
}

const Editor: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [processingStatus, setProcessingStatus] = useState<ProcessingStatus | null>(null);

  const handleVideoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 500 * 1024 * 1024) { // 500MB limit
        setError('Video file size must be less than 500MB');
        return;
      }
      setVideoFile(file);
      setError(null);
    }
  }, []);

  const handleAudioUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) { // 50MB limit
        setError('Audio file size must be less than 50MB');
        return;
      }
      setAudioFile(file);
      setError(null);
    }
  }, []);

  const uploadVideo = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('video', file);

    const response = await fetch(`${API_BASE_URL}/upload/video`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to upload video');
    }

    const data = await response.json();
    return data.filename;
  };

  const uploadAudio = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('audio', file);

    const response = await fetch(`${API_BASE_URL}/upload/audio`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to upload audio');
    }

    const data = await response.json();
    return data.filename;
  };

  const startProcessing = async (videoFilename: string, audioFilename: string): Promise<string> => {
    const response = await fetch(`${API_BASE_URL}/process`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        video_filename: videoFilename,
        audio_filename: audioFilename
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to start processing');
    }

    const data = await response.json();
    return data.job_id;
  };

  const checkStatus = async (jobId: string) => {
    const response = await fetch(`${API_BASE_URL}/status/${jobId}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to check status');
    }
    return response.json();
  };

  const downloadVideo = async (filename: string) => {
    window.location.href = `${API_BASE_URL}/download/${filename}`;
  };

  const cleanup = async () => {
    await fetch(`${API_BASE_URL}/cleanup`, {
      method: 'POST',
    });
  };

  const getStageIcon = (stage?: string) => {
    switch (stage) {
      case 'detecting_kills':
        return <Target className="h-5 w-5" />;
      case 'extracting_clips':
        return <Scissors className="h-5 w-5" />;
      case 'generating_montage':
        return <Film className="h-5 w-5" />;
      default:
        return <Loader2 className="h-5 w-5 animate-spin" />;
    }
  };

  const getStageText = (stage?: string) => {
    switch (stage) {
      case 'detecting_kills':
        return 'Detecting kills in gameplay...';
      case 'extracting_clips':
        return 'Extracting kill clips...';
      case 'generating_montage':
        return 'Generating final montage...';
      default:
        return 'Processing...';
    }
  };

  const handleProcess = async () => {
    if (!videoFile || !audioFile) return;
    
    setIsProcessing(true);
    setProgress(0);
    setError(null);
    setProcessingStatus(null);
    
    try {
      // 1. Upload video
      const videoFilename = await uploadVideo(videoFile);
      
      // 2. Upload audio
      const audioFilename = await uploadAudio(audioFile);
      
      // 3. Start processing
      const newJobId = await startProcessing(videoFilename, audioFilename);
      setJobId(newJobId);
      
      // 4. Poll for status
      const pollStatus = async () => {
        try {
          const status = await checkStatus(newJobId);
          setProgress(status.progress);
          setProcessingStatus(status);
          
          if (status.status === 'processing') {
            setTimeout(pollStatus, 1000);
          } else if (status.status === 'completed') {
            await downloadVideo(status.output_filename);
            await cleanup();
            setIsProcessing(false);
          } else if (status.status === 'failed') {
            setError(status.error || 'Processing failed');
            setIsProcessing(false);
          }
        } catch (error) {
          setError(error instanceof Error ? error.message : 'Failed to check status');
          setIsProcessing(false);
        }
      };
      
      pollStatus();
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
      setIsProcessing(false);
    }
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

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p className="text-red-500">{error}</p>
            </div>
          </motion.div>
        )}

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
                  accept="video/mp4,video/mov,video/avi"
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
                  accept="audio/mp3,audio/wav"
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
                    <div className="flex items-center gap-2">
                      {getStageIcon(processingStatus?.stage)}
                      <span>{getStageText(processingStatus?.stage)}</span>
                    </div>
                    <span>{progress}%</span>
                  </div>
                  {processingStatus?.kill_count !== undefined && (
                    <div className="text-sm text-white/60">
                      Detected {processingStatus.kill_count} kills
                    </div>
                  )}
                  {processingStatus?.clip_count !== undefined && (
                    <div className="text-sm text-white/60">
                      Extracted {processingStatus.clip_count} clips
                    </div>
                  )}
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

import React from 'react';
import { Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center gap-2 font-serif text-2xl font-semibold">
          <Cpu size={24} className="text-white" />
          <span>ATEG</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
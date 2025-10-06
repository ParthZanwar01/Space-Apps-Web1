import { Satellite } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <img 
            src="/images/orcaLogo.png" 
            alt="ORCA Logo" 
            className="w-6 h-6 object-contain"
          />
          <span className="text-xl font-bold">O.R.C.A.</span>
        </div>
        <p className="text-gray-400">Orbital Reconnaissance & Cleanup Architecture</p>
        <p className="text-gray-500 mt-4 text-sm">NASA Space Apps Challenge 2025 - Low Orbital Challenge</p>
      </div>
    </footer>
  );
}

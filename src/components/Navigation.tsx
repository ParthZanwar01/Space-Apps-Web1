import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Satellite } from 'lucide-react';

export default function Navigation() {
  const [businessPlanOpen, setBusinessPlanOpen] = useState(false);
  const [prototypesOpen, setPrototypesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const businessPlanRef = useRef<HTMLDivElement>(null);
  const prototypesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (businessPlanRef.current && !businessPlanRef.current.contains(event.target as Node)) {
        setBusinessPlanOpen(false);
      }
      if (prototypesRef.current && !prototypesRef.current.contains(event.target as Node)) {
        setPrototypesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close dropdowns when clicking on links
  const closeAllDropdowns = () => {
    setBusinessPlanOpen(false);
    setPrototypesOpen(false);
  };

  return (
    <nav className="bg-black/80 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <Satellite className="w-8 h-8 text-red-500" />
            <span className="text-xl font-bold tracking-wider">O.R.C.A.</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-red-500 transition-colors">Home</Link>

            <div className="relative" ref={businessPlanRef}>
              <button
                onClick={() => {
                  setBusinessPlanOpen(!businessPlanOpen);
                  setPrototypesOpen(false);
                }}
                className="flex items-center space-x-1 hover:text-red-500 transition-colors"
              >
                <span>Business Plan</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${businessPlanOpen ? 'rotate-180' : ''}`} />
              </button>
              {businessPlanOpen && (
                <div className="absolute top-full mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
                  <Link to="/development" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700">Development Plan</Link>
                  <Link to="/financial" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700">Financial Plan</Link>
                  <Link to="/scalability" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700">Scalability & Sustainability</Link>
                  <Link to="/regulations" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700">Regulations</Link>
                  <Link to="/focus" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700">Our Focus</Link>
                  <Link to="/future" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors">Future</Link>
                </div>
              )}
            </div>

            <div className="relative" ref={prototypesRef}>
              <button
                onClick={() => {
                  setPrototypesOpen(!prototypesOpen);
                  setBusinessPlanOpen(false);
                }}
                className="flex items-center space-x-1 hover:text-red-500 transition-colors"
              >
                <span>Prototypes & Deliverables</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${prototypesOpen ? 'rotate-180' : ''}`} />
              </button>
              {prototypesOpen && (
                <div className="absolute top-full mt-2 w-72 bg-gray-800 border border-gray-700 rounded-lg shadow-xl">
                  <Link to="/orca" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700">ORCA</Link>
                  <Link to="/neural-detection" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors border-b border-gray-700">Neural Detection System</Link>
                  <Link to="/technologies" onClick={closeAllDropdowns} className="block px-4 py-3 hover:bg-gray-700 transition-colors">Technologies powering ORCA</Link>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-3 space-y-3">
            <Link to="/" className="block hover:text-red-500 transition-colors">Home</Link>
            <div className="space-y-2">
              <p className="font-semibold text-gray-400 text-sm">Business Plan</p>
              <Link to="/development" className="block pl-4 hover:text-red-500 transition-colors">Development Plan</Link>
              <Link to="/financial" className="block pl-4 hover:text-red-500 transition-colors">Financial Plan</Link>
              <Link to="/scalability" className="block pl-4 hover:text-red-500 transition-colors">Scalability & Sustainability</Link>
              <Link to="/regulations" className="block pl-4 hover:text-red-500 transition-colors">Regulations</Link>
              <Link to="/focus" className="block pl-4 hover:text-red-500 transition-colors">Our Focus</Link>
              <Link to="/future" className="block pl-4 hover:text-red-500 transition-colors">Future</Link>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-gray-400 text-sm">Prototypes & Deliverables</p>
              <Link to="/orca" className="block pl-4 hover:text-red-500 transition-colors">ORCA</Link>
              <Link to="/neural-detection" className="block pl-4 hover:text-red-500 transition-colors">Neural Detection System</Link>
              <Link to="/technologies" className="block pl-4 hover:text-red-500 transition-colors">Technologies</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import WasteTracker from './pages/WasteTracker';
import RecyclingMap from './pages/RecyclingMap';
import Community from './pages/Community';
import { Home, Map, PlusSquare, MessageSquare, User, ScanLine, Leaf } from 'lucide-react';
import ScannerModal from './components/ScannerModal';

function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/map', label: 'Map', icon: Map },
    { path: '/tracker', label: 'Log Waste', icon: PlusSquare },
    { path: '/community', label: 'Community', icon: MessageSquare },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="w-72 bg-white text-charcoal flex flex-col border-r border-mist h-full">
      <div className="p-8">
        <h1 className="text-[32px] font-bold text-forest-dark flex items-center gap-3">
          <Leaf className="text-forest" size={32} />
          ReCircle
        </h1>
        <p className="text-forest-light text-sm font-medium mt-2 italic">"Waste less. Live more."</p>
      </div>
      <ul className="flex-1 px-6 space-y-3">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={`flex items-center gap-4 px-5 py-4 rounded-btn transition-all duration-200 font-medium ${
                isActive(item.path) 
                  ? 'bg-mist text-forest-dark shadow-sm' 
                  : 'text-charcoal hover:bg-mist/50 hover:text-forest'
              }`}
            >
              <item.icon size={24} className={isActive(item.path) ? 'text-forest' : 'text-charcoal'} />
              <span className="text-[16px]">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="p-8">
        <div className="bg-sand rounded-card p-5 text-charcoal shadow-sm border border-mist">
          <p className="font-semibold mb-2 text-[14px]">Level 7 Eco-Warrior</p>
          <div className="flex items-center gap-2">
            <span className="text-[24px] font-bold text-forest-dark">780</span>
            <span className="text-[14px] font-medium text-forest-light">pts</span>
          </div>
          <div className="w-full bg-mist rounded-full h-2.5 mt-3">
            <div className="bg-sun h-2.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-mist overflow-hidden font-sans">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden relative">
          <header className="bg-white/80 backdrop-blur-md z-10 px-10 py-6 flex justify-between items-center border-b border-mist">
             <div>
               <h2 className="text-[24px] font-semibold text-charcoal">Good morning, Alex! ☀️</h2>
               <p className="text-[14px] text-forest-light font-medium flex items-center gap-1 mt-1">
                 📍 San Francisco, CA
               </p>
             </div>
             <div className="flex items-center gap-6">
                <button 
                  onClick={() => setIsScannerOpen(true)}
                  className="bg-forest hover:bg-forest-light text-white px-6 py-3 rounded-btn font-semibold text-[16px] shadow-md transition-all flex items-center gap-2"
                >
                  <ScanLine size={20} />
                  Scan Product
                </button>
                <div className="w-12 h-12 bg-ocean rounded-full border-2 border-mist shadow-sm flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-md transition-shadow">
                  AJ
                </div>
             </div>
          </header>

          <main className="flex-1 overflow-x-hidden overflow-y-auto p-10">
            <div className="max-w-6xl mx-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tracker" element={<WasteTracker />} />
                <Route path="/map" element={<RecyclingMap />} />
                <Route path="/community" element={<Community />} />
              </Routes>
            </div>
          </main>
        </div>
        <ScannerModal isOpen={isScannerOpen} onClose={() => setIsScannerOpen(false)} />
      </div>
    </Router>
  );
}

export default App;

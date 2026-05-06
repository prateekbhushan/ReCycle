import React from 'react';
import { Search, MapPin, Navigation, Bookmark, Star, Filter } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function RecyclingMap() {
  return (
    <div className="h-[calc(100vh-120px)] flex gap-6">
      
      {/* Left Sidebar - Search & Locations */}
      <div className="w-1/3 min-w-[350px] bg-white rounded-card shadow-sm border border-mist flex flex-col overflow-hidden">
        
        {/* Search & Filters */}
        <div className="p-6 border-b border-mist bg-mist/30">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-3.5 text-forest-light" size={20} />
            <input 
              type="text" 
              placeholder="Search locations..." 
              className="w-full pl-12 pr-4 py-3 bg-white border border-mist rounded-input shadow-sm focus:outline-none focus:border-forest font-medium text-charcoal"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            <button className="flex items-center gap-1 bg-charcoal text-white px-4 py-1.5 rounded-badge text-sm font-semibold shrink-0">
              <Filter size={14} /> All
            </button>
            <button className="bg-white border border-mist text-charcoal hover:border-forest hover:text-forest px-4 py-1.5 rounded-badge text-sm font-semibold shrink-0 transition-colors">
              ♻️ Open Now
            </button>
            <button className="bg-white border border-mist text-charcoal hover:border-forest hover:text-forest px-4 py-1.5 rounded-badge text-sm font-semibold shrink-0 transition-colors">
              🔋 Batteries
            </button>
          </div>
        </div>

        {/* Location List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <p className="text-sm font-semibold text-forest-light uppercase tracking-wider mb-2">Nearby (0.3mi)</p>
          
          {/* Location Card 1 */}
          <div className="border border-mist rounded-card p-5 hover:shadow-md hover:border-forest-light transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-[18px] text-charcoal flex items-center gap-2">
                <span className="text-xl">♻️</span> Sunset Recycling
              </h4>
              <div className="flex items-center gap-1 text-sun font-bold text-sm">
                <Star size={14} className="fill-sun" /> 4.8
              </div>
            </div>
            <p className="text-sm font-medium text-forest-light mb-3">Open until 6:00 PM · 0.3mi</p>
            <div className="flex gap-2 mb-4">
              <span className="bg-mist text-charcoal text-[12px] px-2 py-1 rounded font-semibold">Plastics</span>
              <span className="bg-mist text-charcoal text-[12px] px-2 py-1 rounded font-semibold">Paper</span>
              <span className="bg-mist text-charcoal text-[12px] px-2 py-1 rounded font-semibold">Glass</span>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-ocean text-white py-2 rounded-btn font-semibold flex items-center justify-center gap-2 hover:bg-ocean/90">
                <Navigation size={16} /> Directions
              </button>
              <button className="w-10 flex items-center justify-center border border-mist rounded-btn text-forest-light hover:bg-mist">
                <Bookmark size={18} />
              </button>
            </div>
          </div>

          {/* Location Card 2 */}
          <div className="border border-mist rounded-card p-5 hover:shadow-md hover:border-forest-light transition-all cursor-pointer">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-[18px] text-charcoal flex items-center gap-2">
                <span className="text-xl">🔋</span> GreenCell Drop
              </h4>
              <div className="flex items-center gap-1 text-sun font-bold text-sm">
                <Star size={14} className="fill-sun" /> 4.5
              </div>
            </div>
            <p className="text-sm font-medium text-forest-light mb-3">Open 24/7 · 0.7mi</p>
            <div className="flex gap-2 mb-4">
              <span className="bg-mist text-charcoal text-[12px] px-2 py-1 rounded font-semibold">Batteries</span>
              <span className="bg-mist text-charcoal text-[12px] px-2 py-1 rounded font-semibold">Electronics</span>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-mist text-forest-dark py-2 rounded-btn font-semibold flex items-center justify-center gap-2 hover:bg-forest-light hover:text-white transition-colors">
                <Navigation size={16} /> Directions
              </button>
              <button className="w-10 flex items-center justify-center border border-mist rounded-btn text-forest-light hover:bg-mist">
                <Bookmark size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Right Side - Map Area */}
      <div className="flex-1 rounded-card border border-mist relative overflow-hidden z-0">
        <MapContainer center={[37.7749, -122.4194]} zoom={13} className="w-full h-full" zoomControl={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[37.7749, -122.4194]}>
            <Popup>
              <strong>You are here</strong>
            </Popup>
          </Marker>
          <Marker position={[37.7849, -122.4094]}>
            <Popup>
              <strong>Sunset Recycling</strong><br />Plastics, Paper, Glass.
            </Popup>
          </Marker>
          <Marker position={[37.7649, -122.4294]}>
            <Popup>
              <strong>GreenCell Drop</strong><br />Batteries, Electronics.
            </Popup>
          </Marker>
        </MapContainer>
      </div>

    </div>
  );
}

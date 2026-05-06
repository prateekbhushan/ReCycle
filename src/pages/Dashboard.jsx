import React from 'react';
import { PlusSquare, Map, ScanLine, Repeat, Flame, Trash2, TreePine, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', recycled: 3, waste: 1.2 },
  { name: 'Tue', recycled: 5, waste: 0.8 },
  { name: 'Wed', recycled: 2, waste: 2.1 },
  { name: 'Thu', recycled: 6, waste: 0.5 },
  { name: 'Fri', recycled: 4, waste: 1.0 },
  { name: 'Sat', recycled: 7, waste: 0.2 },
  { name: 'Sun', recycled: 4, waste: 0.8 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Quick Actions */}
      <div>
        <h3 className="text-[18px] font-semibold text-charcoal mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="bg-white p-6 rounded-card shadow-sm border border-mist flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-forest-light transition-all group">
            <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors">
              <PlusSquare size={28} />
            </div>
            <span className="font-semibold text-charcoal">Log Waste</span>
          </button>
          <button className="bg-white p-6 rounded-card shadow-sm border border-mist flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-ocean transition-all group">
            <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center text-ocean group-hover:bg-ocean group-hover:text-white transition-colors">
              <Map size={28} />
            </div>
            <span className="font-semibold text-charcoal">Find Map</span>
          </button>
          <button className="bg-white p-6 rounded-card shadow-sm border border-mist flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-terracotta transition-all group">
            <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center text-terracotta group-hover:bg-terracotta group-hover:text-white transition-colors">
              <ScanLine size={28} />
            </div>
            <span className="font-semibold text-charcoal">Scan Item</span>
          </button>
          <button className="bg-white p-6 rounded-card shadow-sm border border-mist flex flex-col items-center justify-center gap-3 hover:shadow-md hover:border-sun transition-all group">
            <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center text-sun group-hover:bg-sun group-hover:text-white transition-colors">
              <Repeat size={28} />
            </div>
            <span className="font-semibold text-charcoal">Swap</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Today's Impact */}
          <div className="bg-white p-8 rounded-card shadow-sm border border-mist">
            <h3 className="text-[20px] font-semibold text-charcoal mb-6">Today's Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-mist rounded-card text-center">
                <Trash2 className="text-charcoal mb-2" size={32} />
                <span className="text-[24px] font-bold text-forest-dark">0.8kg</span>
                <span className="text-sm font-medium text-forest-light">Waste saved</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-mist rounded-card text-center">
                <Repeat className="text-ocean mb-2" size={32} />
                <span className="text-[24px] font-bold text-ocean">4 items</span>
                <span className="text-sm font-medium text-ocean">Recycled</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-mist rounded-card text-center">
                <TreePine className="text-forest mb-2" size={32} />
                <span className="text-[24px] font-bold text-forest">2.3kg</span>
                <span className="text-sm font-medium text-forest">CO₂ avoided</span>
              </div>
            </div>
            <div className="mt-8 h-48 w-full bg-mist rounded-card flex items-center justify-center pt-4 pr-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                  <Tooltip 
                    cursor={{fill: '#F4F1DE'}} 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="recycled" name="Recycled (items)" fill="#118AB2" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="waste" name="Waste (kg)" fill="#2D6A4F" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-8 rounded-card shadow-sm border border-mist">
            <h3 className="text-[20px] font-semibold text-charcoal mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border border-mist rounded-card hover:bg-mist transition-colors">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-ocean flex-shrink-0">
                  <Repeat size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-charcoal">Recycled plastic bottle</h4>
                    <span className="text-forest font-bold text-sm">+10 pts</span>
                  </div>
                  <p className="text-sm text-forest-light mt-1">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 border border-mist rounded-card hover:bg-mist transition-colors">
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-sun flex-shrink-0">
                  <Repeat size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-charcoal">Swapped book with Sarah</h4>
                    <span className="text-forest font-bold text-sm">+50 pts</span>
                  </div>
                  <p className="text-sm text-forest-light mt-1">Yesterday</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-8">
          
          {/* Level Card */}
          <div className="bg-forest-dark p-8 rounded-card shadow-glow text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 opacity-10">
              <Award size={120} />
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-forest rounded-full mx-auto flex items-center justify-center mb-4 border-4 border-forest-light">
                <Award size={36} className="text-sun" />
              </div>
              <h3 className="text-[24px] font-bold">Level 7 Eco-Warrior</h3>
              <p className="text-mist font-medium mt-1">780 / 1000 pts</p>
              
              <div className="w-full bg-forest-dark/50 border border-forest-light rounded-full h-3 mt-6">
                <div className="bg-sun h-3 rounded-full" style={{ width: '78%' }}></div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sun font-bold bg-white/10 py-2 px-4 rounded-badge inline-flex">
                <Flame size={20} /> 12 day streak!
              </div>
            </div>
          </div>

          {/* Weekly Goal */}
          <div className="bg-white p-8 rounded-card shadow-sm border border-mist">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[18px] font-semibold text-charcoal">Weekly Goal</h3>
              <span className="text-terracotta font-bold text-sm">3 days left! 🎯</span>
            </div>
            <div className="flex justify-between items-end mb-2">
              <span className="text-[32px] font-bold text-forest-dark">67%</span>
              <span className="text-sm text-forest-light font-medium pb-1">2.4kg / 3.5kg target</span>
            </div>
            <div className="w-full bg-mist rounded-full h-4">
              <div className="bg-forest h-4 rounded-full transition-all" style={{ width: '67%' }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

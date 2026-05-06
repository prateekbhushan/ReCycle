import React from 'react';
import { Camera, Save } from 'lucide-react';

export default function WasteTracker() {
  const categories = [
    { icon: '🥤', label: 'Plastic' },
    { icon: '📦', label: 'Paper' },
    { icon: '🍌', label: 'Food' },
    { icon: '👕', label: 'Textile' },
    { icon: '🔋', label: 'Electronic' },
    { icon: '💡', label: 'Glass' },
    { icon: '🍾', label: 'Metal' },
    { icon: '⚡', label: 'Hazard' },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-[32px] font-bold text-forest-dark">Log Waste</h2>
      </div>

      <div className="bg-white p-8 rounded-card shadow-sm border border-mist space-y-8">
        {/* Categories */}
        <div>
          <h3 className="text-[18px] font-semibold text-charcoal mb-4">What did you dispose of?</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {categories.map((cat, idx) => (
              <button 
                key={cat.label}
                className={`flex flex-col items-center justify-center p-4 rounded-card border-2 transition-all ${
                  idx === 0 
                    ? 'border-forest bg-mist' 
                    : 'border-mist hover:border-forest-light bg-white'
                }`}
              >
                <span className="text-[28px] mb-2">{cat.icon}</span>
                <span className="text-[12px] font-semibold text-charcoal">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-mist pt-6">
          <h4 className="text-[16px] font-semibold text-forest-dark mb-4">Selected: Plastic</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-forest-light mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 rounded-btn bg-mist text-forest-dark text-[24px] font-bold hover:bg-mist/80">-</button>
                <span className="text-[20px] font-bold w-24 text-center">3 items</span>
                <button className="w-12 h-12 rounded-btn bg-forest text-white text-[24px] font-bold hover:bg-forest-light">+</button>
              </div>
            </div>

            {/* Weight */}
            <div>
              <label className="block text-sm font-semibold text-forest-light mb-2">Weight (optional)</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="0.15" 
                  className="w-full bg-mist border border-mist rounded-input py-3 px-4 text-[16px] font-medium text-charcoal focus:outline-none focus:border-forest"
                />
                <span className="absolute right-4 top-3.5 text-forest-light font-bold">kg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disposal Method */}
        <div>
          <label className="block text-sm font-semibold text-forest-light mb-3">How was it disposed?</label>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-4 border-2 border-forest bg-mist rounded-card cursor-pointer">
              <input type="radio" name="disposal" className="w-5 h-5 text-forest" defaultChecked />
              <span className="font-semibold text-charcoal">Recycled</span>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 border-mist rounded-card hover:bg-mist transition-colors cursor-pointer">
              <input type="radio" name="disposal" className="w-5 h-5" />
              <span className="font-semibold text-charcoal">Reused</span>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 border-mist rounded-card hover:bg-mist transition-colors cursor-pointer">
              <input type="radio" name="disposal" className="w-5 h-5" />
              <span className="font-semibold text-charcoal">Composted</span>
            </label>
            <label className="flex items-center gap-3 p-4 border-2 border-mist rounded-card hover:bg-mist transition-colors cursor-pointer">
              <input type="radio" name="disposal" className="w-5 h-5" />
              <span className="font-semibold text-charcoal">Landfill</span>
            </label>
          </div>
        </div>

        {/* Notes & Photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-semibold text-forest-light mb-2">Notes</label>
            <textarea 
              className="w-full bg-mist border border-mist rounded-input py-3 px-4 text-[16px] font-medium text-charcoal focus:outline-none focus:border-forest h-32 resize-none"
              placeholder="Water bottle, clean"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-semibold text-forest-light mb-2">Add photo (optional)</label>
            <button className="w-full h-32 border-2 border-dashed border-charcoal/20 rounded-input flex flex-col items-center justify-center text-forest-light hover:bg-mist transition-colors">
              <Camera size={32} className="mb-2" />
              <span className="font-medium">Upload Image</span>
            </button>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-mist flex justify-end">
          <button className="bg-forest text-white px-8 py-4 rounded-btn font-bold text-[18px] shadow-md hover:bg-forest-light transition-all flex items-center gap-3">
            <span className="bg-white/20 px-2 py-1 rounded-md text-sm">+15 pts</span>
            <Save size={20} />
            Save Log
          </button>
        </div>

      </div>
    </div>
  );
}

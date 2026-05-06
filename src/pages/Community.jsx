import React from 'react';
import { Heart, MessageCircle, Share2, Repeat, Award, Image as ImageIcon } from 'lucide-react';

export default function Community() {
  return (
    <div className="flex gap-8 max-w-6xl mx-auto">
      
      {/* Main Feed */}
      <div className="flex-1 space-y-6">
        
        {/* Feed Nav */}
        <div className="flex gap-4 border-b border-mist pb-4 mb-6">
          <button className="text-[18px] font-bold text-forest-dark border-b-2 border-forest pb-2 px-2">Feed</button>
          <button className="text-[18px] font-semibold text-forest-light hover:text-forest pb-2 px-2 transition-colors">Events</button>
          <button className="text-[18px] font-semibold text-forest-light hover:text-forest pb-2 px-2 transition-colors">Swaps</button>
          <button className="text-[18px] font-semibold text-forest-light hover:text-forest pb-2 px-2 transition-colors">Tips</button>
        </div>

        {/* Create Post */}
        <div className="bg-white p-6 rounded-card shadow-sm border border-mist flex gap-4">
          <div className="w-12 h-12 bg-ocean rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg">AJ</div>
          <div className="flex-1">
            <textarea 
              className="w-full bg-mist rounded-input p-4 border-none focus:ring-2 focus:ring-forest-light focus:outline-none resize-none text-[16px] font-medium"
              placeholder="Share an eco-tip, start a swap, or ask a question..."
              rows="2"
            ></textarea>
            <div className="flex justify-between items-center mt-4">
              <button className="text-forest-light hover:text-forest flex items-center gap-2 font-medium">
                <ImageIcon size={20} /> Add Photo
              </button>
              <button className="bg-forest text-white px-8 py-2 rounded-btn font-bold shadow-md hover:bg-forest-light transition-all">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Post 1 - Milestone */}
        <div className="bg-white p-6 rounded-card shadow-sm border border-mist">
          <div className="flex gap-4 items-center mb-4">
            <div className="w-12 h-12 bg-sun rounded-full flex items-center justify-center text-charcoal font-bold text-lg border-2 border-mist">SC</div>
            <div>
              <p className="font-bold text-[16px] text-charcoal flex items-center gap-2">
                Sarah Chen <span className="bg-mist text-forest text-xs px-2 py-1 rounded font-bold">⭐ Eco-Expert</span>
              </p>
              <p className="text-sm font-medium text-forest-light">2 hours ago</p>
            </div>
          </div>
          <div className="bg-mist/50 p-6 rounded-card text-center mb-4 border border-mist">
            <Award size={48} className="text-sun mx-auto mb-3" />
            <h3 className="text-[20px] font-bold text-forest-dark mb-2">30 Days Zero-Waste Streak! 🎉</h3>
            <p className="text-charcoal font-medium">Just hit my longest streak yet. It gets easier every day!</p>
          </div>
          <div className="flex gap-6 text-[14px] font-bold text-forest-light pt-2">
            <button className="flex items-center gap-2 hover:text-terracotta transition-colors">
              <Heart size={18} className="fill-terracotta text-terracotta" /> 45
            </button>
            <button className="flex items-center gap-2 hover:text-ocean transition-colors">
              <MessageCircle size={18} /> 12
            </button>
            <button className="flex items-center gap-2 hover:text-charcoal ml-auto transition-colors">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>

        {/* Post 2 - Repair */}
        <div className="bg-white p-6 rounded-card shadow-sm border border-mist">
          <div className="flex gap-4 items-center mb-4">
            <div className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center text-white font-bold text-lg">MR</div>
            <div>
              <p className="font-bold text-[16px] text-charcoal">Mike Ross</p>
              <p className="text-sm font-medium text-forest-light">5 hours ago</p>
            </div>
          </div>
          <p className="text-[16px] text-charcoal font-medium mb-4 leading-relaxed">
            Patched my old jeans instead of buying new! Saved $60 and 2,700L of water. Check out the repair hub for the tutorial I used! 🧵👖
          </p>
          <div className="h-64 bg-mist rounded-card mb-4 flex items-center justify-center border border-dashed border-forest-light/30 text-forest-light">
            [Photo of repaired jeans]
          </div>
          <div className="flex gap-6 text-[14px] font-bold text-forest-light pt-2">
            <button className="flex items-center gap-2 hover:text-terracotta transition-colors">
              <Heart size={18} /> 89
            </button>
            <button className="flex items-center gap-2 hover:text-ocean transition-colors">
              <MessageCircle size={18} /> 23
            </button>
            <button className="flex items-center gap-2 hover:text-charcoal ml-auto transition-colors">
              <Share2 size={18} /> Share
            </button>
          </div>
        </div>

      </div>

      {/* Right Sidebar - Widgets */}
      <div className="w-80 space-y-6">
        
        {/* Weekly Challenge */}
        <div className="bg-forest-dark text-white p-6 rounded-card shadow-glow relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 opacity-20">
            <Award size={100} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-sun font-bold text-sm uppercase tracking-wider mb-2">
              <Award size={16} /> Weekly Challenge
            </div>
            <h3 className="text-[20px] font-bold mb-2">"Zero Plastic Week"</h3>
            <p className="text-mist font-medium text-sm mb-6">1,234 changemakers participating right now.</p>
            <button className="w-full bg-white text-forest-dark font-bold py-3 rounded-btn hover:bg-mist transition-colors shadow-sm">
              Join Challenge
            </button>
          </div>
        </div>

        {/* Swap Available Widget */}
        <div className="bg-white p-6 rounded-card shadow-sm border border-mist">
          <div className="flex items-center gap-2 text-charcoal font-bold text-sm uppercase tracking-wider mb-4 border-b border-mist pb-3">
            <Repeat size={16} className="text-sun" /> Swap Available Near You
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-20 bg-mist rounded flex items-center justify-center text-2xl border border-charcoal/10">
              📚
            </div>
            <div>
              <h4 className="font-bold text-charcoal leading-tight">"The Overstory"</h4>
              <p className="text-sm font-medium text-forest-light mb-1">by Richard Powers</p>
              <p className="text-xs font-semibold text-ocean flex items-center gap-1">
                <MapPin size={12} /> 0.5 mi away
              </p>
            </div>
          </div>
          <button className="w-full mt-4 bg-mist text-forest-dark font-bold py-2 rounded-btn hover:bg-forest hover:text-white transition-colors border border-mist">
            Request Swap
          </button>
        </div>

      </div>

    </div>
  );
}

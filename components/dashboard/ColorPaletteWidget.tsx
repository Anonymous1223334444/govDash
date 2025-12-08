'use client';

import { Pause } from 'lucide-react';

export function ColorPaletteWidget() {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Color Palette Selection</h3>
      </div>
      <p className="text-xs text-gray-400 mb-6">Overlife: Gamers App</p>

      <div className="flex justify-center mb-6">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/50">
          <button className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center hover:bg-orange-700 transition-colors">
            <Pause size={24} fill="white" />
          </button>
        </div>
      </div>

      <div className="flex justify-between text-xs">
        <div>
          <div className="text-gray-400 mb-1">Time Tracked</div>
          <div className="font-semibold">00:57:56</div>
        </div>
        <div className="text-right">
          <div className="text-gray-400 mb-1">Estimated</div>
          <div className="font-semibold">06:00:00</div>
        </div>
      </div>
    </div>
  );
}

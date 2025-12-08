'use client';

import { TrendingUp, MoreVertical } from 'lucide-react';

const dailyActivity = [
  { day: 'Mon', value: 92 },
  { day: 'Tue', value: 41 },
  { day: 'Wed', value: 78 },
  { day: 'Thu', value: 0 },
  { day: 'Fri', value: 0 }
];

export function ActivityWidget() {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-800 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Activity</h3>
          <span className="text-xs text-green-500 flex items-center gap-1">
            +12%
            <TrendingUp size={12} />
          </span>
        </div>
        <button className="text-gray-400 hover:text-white">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="text-5xl font-bold mb-6">70%</div>

      <div className="grid grid-cols-5 gap-2">
        {dailyActivity.map((item) => (
          <div key={item.day} className="text-center">
            <div className="text-xs text-gray-400 mb-2">{item.day}</div>
            <div className={`text-sm font-semibold ${item.value > 50 ? 'text-white' : 'text-gray-500'}`}>
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

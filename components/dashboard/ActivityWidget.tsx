'use client';

import { TrendingUp, MoreVertical } from 'lucide-react';

const dailyActivity = [
  { day: 'Lun', value: 92 },
  { day: 'Mar', value: 41 },
  { day: 'Mer', value: 78 },
  { day: 'Jeu', value: 55 },
  { day: 'Ven', value: 64 },
];

export function ActivityWidget() {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200/70 bg-white/90 p-6 text-slate-900 shadow-sm dark:border-gray-800 dark:bg-[#0f0f0f] dark:text-white">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Activité digitale</h3>
          <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
            +12%
            <TrendingUp size={12} />
          </span>
        </div>
        <button className="text-slate-400 transition hover:text-slate-600 dark:text-gray-400 dark:hover:text-white">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="mb-6 text-5xl font-bold">70%</div>

      <div className="grid grid-cols-5 gap-2 text-xs">
        {dailyActivity.map((item) => (
          <div key={item.day} className="text-center">
            <div className="mb-2 text-slate-500 dark:text-gray-400">{item.day}</div>
            <div className={`text-sm font-semibold ${item.value > 50 ? 'text-slate-900 dark:text-white' : 'text-slate-400 dark:text-gray-500'}`}>
              {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

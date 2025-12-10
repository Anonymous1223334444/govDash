'use client';

import { Play, Star, MoreVertical, ChevronRight } from 'lucide-react';

const tasks = [
  { title: 'Validation communiqué Conseil', subtitle: 'Cabinet du ministre', active: true },
  { title: 'Note de synthèse programme fibre', subtitle: 'Cellule infrastructures', active: false },
  { title: 'Brief partenaires GéoData', subtitle: 'Direction coopération', active: false },
];

export function TodaysTasksWidget() {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-6 text-slate-900 shadow-sm dark:border-gray-800 dark:bg-[#0f0f0f] dark:text-white">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Tâches prioritaires</h3>
          <span className="text-xs text-slate-500 dark:text-gray-400">3</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Gérer
          </button>
          <ChevronRight size={14} className="text-blue-500" />
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`rounded-lg p-3 ${
              task.active
                ? 'border border-orange-200/70 bg-orange-50 text-slate-900 dark:border-orange-500/30 dark:bg-orange-500/10'
                : 'border border-slate-200/70 bg-white text-slate-700 dark:border-transparent dark:bg-gray-800/60 dark:text-gray-200'
            }`}
          >
            <div className="flex items-center gap-3">
              <button
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                  task.active ? 'bg-orange-500 text-white' : 'bg-blue-500/20 text-blue-500'
                }`}
              >
                <Play size={14} fill={task.active ? 'white' : 'none'} className="text-current" />
              </button>
              <div className="min-w-0 flex-1">
                <div className="truncate text-xs font-medium">{task.title}</div>
                <div className="truncate text-xs text-slate-500 dark:text-gray-400">{task.subtitle}</div>
              </div>
              <button className="text-slate-400 transition hover:text-slate-600 dark:text-gray-400 dark:hover:text-white">
                <Star size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

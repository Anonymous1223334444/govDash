'use client';

import { Play, Star, MoreVertical, ChevronRight } from 'lucide-react';

const tasks = [
  { title: 'Color Palette Selection', subtitle: 'Overlife: Gamers App', active: true },
  { title: 'Creating Landing page for...', subtitle: 'Quitar Tuner', active: false },
  { title: 'Competitive & functional a...', subtitle: 'BOSDB', active: false }
];

export function TodaysTasksWidget() {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Today's tasks</h3>
          <span className="text-xs text-gray-400">3</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-blue-500 text-xs hover:text-blue-400">
            Manage
          </button>
          <ChevronRight size={14} className="text-blue-500" />
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={index} className={`p-3 rounded-lg ${task.active ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-gray-800/30'}`}>
            <div className="flex items-center gap-3">
              <button className={`w-8 h-8 rounded-lg flex items-center justify-center ${task.active ? 'bg-orange-500' : 'bg-blue-500/20'}`}>
                <Play size={14} fill={task.active ? 'white' : 'none'} className={task.active ? 'text-white' : 'text-blue-500'} />
              </button>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium truncate">{task.title}</div>
                <div className="text-xs text-gray-400 truncate">{task.subtitle}</div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <Star size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

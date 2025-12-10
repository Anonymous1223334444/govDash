'use client';

import { Calendar, Plus, ChevronRight } from 'lucide-react';

const meetings = [
  { time: '08:30', period: 'MAT', title: 'Séance avec la Présidence', type: 'calendar' },
  { time: '12:00', period: 'MIDI', title: 'Point d’étape IA citoyenne', type: 'video' },
  { time: '15:30', period: 'APR', title: 'Visio partenaires Union africaine', type: 'general' },
];

export function TodaysMeetingsWidget() {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-6 text-slate-900 shadow-sm dark:border-gray-800 dark:bg-[#0f0f0f] dark:text-white">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Réunions du jour</h3>
          <span className="text-xs text-slate-500 dark:text-gray-400">3</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Voir tout
          </button>
          <ChevronRight size={14} className="text-blue-500" />
        </div>
      </div>

      <div className="space-y-3">
        {meetings.map((meeting, index) => (
          <div key={index} className="flex items-center gap-3 rounded-lg border border-slate-200/70 bg-white p-3 text-slate-800 dark:border-transparent dark:bg-gray-800/50 dark:text-gray-100">
            <div className="rounded px-2 py-1 text-xs font-medium text-red-600 dark:text-red-300 dark:bg-red-500/10 bg-red-50">
              <div className="text-[10px] uppercase tracking-wide">{meeting.period}</div>
              <div className="text-base font-bold">{meeting.time}</div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-xs">{meeting.title}</div>
            </div>
            <button className="flex h-6 w-6 items-center justify-center rounded bg-slate-100 text-slate-600 dark:bg-gray-700 dark:text-white">
              <Calendar size={12} />
            </button>
          </div>
        ))}

        <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 p-3 text-xs font-semibold text-blue-600 transition hover:bg-slate-50 dark:border-gray-700 dark:text-blue-300 dark:hover:bg-gray-800/50">
          <Plus size={14} />
          <span>Programmer une réunion</span>
        </button>
      </div>
    </div>
  );
}

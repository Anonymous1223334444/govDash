'use client';

import { ChevronRight } from 'lucide-react';

const reminders = [
  { time: '09:30', period: 'MAT', title: 'Contrôle qualité bulletin radio', priority: 'Faible' },
  { time: '11:00', period: 'MAT', title: 'Présentation au Conseil des ministres', priority: 'Élevée' },
  { time: '16:15', period: 'APR', title: 'Ajouter sous-tâche veille sanitaire', priority: 'Élevée' },
];

export function RemindersWidget() {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-6 text-slate-900 shadow-sm dark:border-gray-800 dark:bg-[#0f0f0f] dark:text-white">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-base font-semibold">Rappels rapides</h3>
        <div className="flex items-center gap-2">
          <button className="text-xs font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400">
            Gérer
          </button>
          <ChevronRight size={14} className="text-blue-500" />
        </div>
      </div>

      <div className="space-y-4 text-xs">
        {reminders.map((reminder, index) => (
          <div key={index}>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-2xl font-bold">
                {reminder.time}
                <span className="ml-1 text-sm text-slate-500 dark:text-gray-400">{reminder.period}</span>
              </div>
              <span
                className={`rounded px-2 py-1 ${
                  reminder.priority === 'Élevée'
                    ? 'bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-300'
                    : 'bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-300'
                }`}
              >
                {reminder.priority}
                <span className="ml-1">●</span>
              </span>
            </div>
            <p className="text-slate-500 dark:text-gray-400">{reminder.title}</p>
            {index < reminders.length - 1 && <div className="mt-4 border-t border-slate-200/70 dark:border-gray-800"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

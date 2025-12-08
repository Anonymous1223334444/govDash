'use client';

import { ChevronRight } from 'lucide-react';

const reminders = [
  { time: '09:30', period: 'AM', title: 'Check test results', priority: 'Low' },
  { time: '10:00', period: 'AM', title: 'Client Presentation', priority: 'High' },
  { time: '04:15', period: 'PM', title: "Add new subtask to Doctor's analysis", priority: 'High' }
];

export function RemindersWidget() {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold">Reminders</h3>
        <div className="flex items-center gap-2">
          <button className="text-blue-500 text-xs hover:text-blue-400">
            Manage
          </button>
          <ChevronRight size={14} className="text-blue-500" />
        </div>
      </div>

      <div className="space-y-4">
        {reminders.map((reminder, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-2xl font-bold">
                {reminder.time}
                <span className="text-sm text-gray-400 ml-1">{reminder.period}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                reminder.priority === 'High'
                  ? 'text-red-500 bg-red-500/10'
                  : 'text-green-500 bg-green-500/10'
              }`}>
                {reminder.priority}
                <span className="ml-1">●</span>
              </span>
            </div>
            <p className="text-xs text-gray-400">{reminder.title}</p>
            {index < reminders.length - 1 && <div className="mt-4 border-t border-gray-800"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { Calendar, Plus, ChevronRight } from 'lucide-react';

const meetings = [
  { time: '10:00', period: 'AM', title: 'Present the project and gather feedback', type: 'calendar' },
  { time: '01:00', period: 'PM', title: 'Meeting with UX team', type: 'video' },
  { time: '03:00', period: 'AM', title: 'Onboarding of the project', type: 'general' }
];

export function TodaysMeetingsWidget() {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Today's meetings</h3>
          <span className="text-xs text-gray-400">6</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-blue-500 text-xs hover:text-blue-400">
            View all
          </button>
          <ChevronRight size={14} className="text-blue-500" />
        </div>
      </div>

      <div className="space-y-3">
        {meetings.map((meeting, index) => (
          <div key={index} className="p-3 rounded-lg bg-gray-800/30 flex items-center gap-3">
            <div className="bg-red-500/20 px-2 py-1 rounded text-xs font-medium text-red-500">
              <div className="text-xs">{meeting.period}</div>
              <div className="text-base font-bold">{meeting.time}</div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs truncate">{meeting.title}</div>
            </div>
            <button className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center">
              <Calendar size={12} />
            </button>
          </div>
        ))}

        <button className="w-full p-3 rounded-lg border border-dashed border-gray-700 flex items-center justify-center gap-2 text-blue-500 hover:bg-gray-800/30 transition-colors">
          <Plus size={14} />
          <span className="text-xs">Schedule meeting</span>
        </button>
      </div>
    </div>
  );
}

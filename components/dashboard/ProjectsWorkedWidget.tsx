'use client';

import { MoreVertical } from 'lucide-react';

const projects = [
  { name: 'OverBk', value: 44, color: '#3b82f6' },
  { name: 'MagnumShop', value: 24, color: '#10b981' },
  { name: 'DocuVault', value: 18, color: '#f59e0b' },
  { name: 'AfterMidnight', value: 14, color: '#8b5cf6' }
];

export function ProjectsWorkedWidget() {
  return (
    <div className="bg-[#0f0f0f] rounded-2xl p-6 border border-gray-800 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Projects worked</h3>
          <span className="text-xs text-red-500">-5%</span>
        </div>
        <button className="text-gray-400 hover:text-white">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="flex items-center gap-6 mb-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#1f1f1f"
              strokeWidth="12"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="12"
              strokeDasharray={`${projects[0].value * 2.51} ${251.2 - projects[0].value * 2.51}`}
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#10b981"
              strokeWidth="12"
              strokeDasharray={`${projects[1].value * 2.51} ${251.2 - projects[1].value * 2.51}`}
              strokeDashoffset={-projects[0].value * 2.51}
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="12"
              strokeDasharray={`${projects[2].value * 2.51} ${251.2 - projects[2].value * 2.51}`}
              strokeDashoffset={-(projects[0].value + projects[1].value) * 2.51}
              strokeLinecap="round"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="12"
              strokeDasharray={`${projects[3].value * 2.51} ${251.2 - projects[3].value * 2.51}`}
              strokeDashoffset={-(projects[0].value + projects[1].value + projects[2].value) * 2.51}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-bold">4</div>
            <div className="text-xs text-gray-400">projects</div>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {projects.map((project) => (
            <div key={project.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: project.color }}
                ></div>
                <span className="text-xs text-gray-300">{project.name}</span>
              </div>
              <span className="text-xs font-semibold">{project.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

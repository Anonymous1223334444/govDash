'use client';

import { MoreVertical } from 'lucide-react';

const projects = [
  { name: 'Plateforme e-gov', value: 44, color: '#3b82f6' },
  { name: 'Centre d’appels citoyen', value: 24, color: '#10b981' },
  { name: 'Portail diaspora', value: 18, color: '#f59e0b' },
  { name: 'Programme fibre rurale', value: 14, color: '#8b5cf6' },
];

export function ProjectsWorkedWidget() {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200/70 bg-white/90 p-6 text-slate-900 shadow-sm dark:border-gray-800 dark:bg-[#0f0f0f] dark:text-white">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-semibold">Portefeuilles en cours</h3>
          <span className="text-xs text-red-500">-5%</span>
        </div>
        <button className="text-slate-400 transition hover:text-slate-600 dark:text-gray-400 dark:hover:text-white">
          <MoreVertical size={16} />
        </button>
      </div>

      <div className="mb-6 flex items-center gap-6">
        <div className="relative h-32 w-32">
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-xs text-slate-500 dark:text-gray-400">
            <div className="text-2xl font-bold">4</div>
            <div>projets clefs</div>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          {projects.map((project) => (
            <div key={project.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: project.color }}
                ></div>
                <span className="text-xs text-slate-600 dark:text-gray-300">{project.name}</span>
              </div>
              <span className="text-xs font-semibold">{project.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

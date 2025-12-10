'use client';

import { Filter, Users, MessageSquare, Paperclip } from 'lucide-react';
import { cn } from '@/lib/utils';

const days = [
  { day: 'LUN', date: '18' },
  { day: 'MAR', date: '19' },
  { day: 'MER', date: '20' },
  { day: 'JEU', date: '21' },
  { day: 'VEN', date: '22' },
];

const projects: Record<string, any[]> = {
  'LUN 18': [
    {
      time: '09:00',
      title: 'Brief stratégie communication',
      description: 'Alignement objectifs et messages',
      status: 'Validé',
      priority: 'low',
      duration: '2h',
      comments: 116,
      attachments: 3,
      team: 3,
    },
    {
      time: '11:00',
      title: 'Mise à jour identité visuelle portail',
      description: 'Calibrer les lignes graphiques',
      status: 'Validé',
      priority: 'low',
    },
  ],
  'MAR 19': [
    {
      time: '09:00',
      title: 'Note de cadrage campagne diaspora',
      description: 'Validation contenus et réseaux',
      status: 'Validé',
      priority: 'low',
    },
    {
      time: '01:30',
      title: 'Pause opérationnelle',
      priority: 'low',
    },
  ],
  'MER 20': [
    {
      time: '09:00',
      title: 'Sélection porte-paroles régaliens',
      description: 'Constituer panel et messages clés',
      status: 'Moyen',
      priority: 'medium',
      duration: '01:24',
      participants: 5,
      team: 2,
    },
    {
      time: '01:30',
      title: 'Pause opérationnelle',
      priority: 'low',
    },
    {
      time: '19:30',
      title: 'Point UX citoyens',
      status: 'Urgent',
      priority: 'high',
    },
  ],
  'JEU 21': [
    {
      time: '09:00',
      title: 'Conception interface guichet unique',
      description: 'Optimisation accessibilité',
      status: 'Urgent',
      priority: 'high',
      team: 3,
      duration: '3d',
    },
    {
      time: '09:00',
      title: 'Revue prototype dématérialisation',
      description: 'Présenter la navigation aux équipes',
      status: 'Faible',
      priority: 'low',
      team: 3,
    },
  ],
  'VEN 22': [
    {
      time: '09:00',
      title: 'Tests usagers services mobiles',
      description: 'Collecter retours population pilote',
      status: 'Faible',
      priority: 'low',
    },
    {
      time: '01:00',
      title: 'Présentation comité interministériel',
      description: 'Partage des avancées numériques',
      status: 'Urgent',
      priority: 'high',
      team: 3,
    },
  ],
};

export function ProjectsCalendar() {
  const renderDay = (variant: 'compact' | 'full', dayInfo: (typeof days)[number]) => {
    const key = `${dayInfo.day} ${dayInfo.date}`;
    const dayProjects = projects[key] || [];

    return (
      <div
        key={`${key}-${variant}`}
        className={
          variant === 'compact'
            ? 'min-w-[230px] rounded-2xl border border-slate-200/70 bg-white/95 p-4 shadow-sm dark:border-gray-800 dark:bg-[#101010]'
            : undefined
        }
      >
        <div className={variant === 'compact' ? 'mb-2 flex items-center justify-between' : 'mb-4'}>
          <div className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400">{dayInfo.day}</div>
          <div className={`text-2xl font-semibold ${dayInfo.day === 'MER' ? 'text-red-500' : ''}`}>{dayInfo.date}</div>
        </div>

        <div className="space-y-3">
          {dayProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className={cn(
                'rounded-xl border p-3 text-xs sm:text-[13px]',
                project.priority === 'high'
                  ? 'border-red-200/70 bg-red-50 text-red-900 dark:border-red-500/30 dark:bg-red-900/20 dark:text-red-100'
                  : project.priority === 'medium'
                  ? 'border-orange-200/70 bg-orange-50 text-orange-900 dark:border-orange-500/30 dark:bg-orange-900/20 dark:text-orange-100'
                  : 'border-slate-200/70 bg-white text-slate-700 dark:border-gray-700/60 dark:bg-gray-800/50 dark:text-gray-200'
              )}
            >
              <div className="mb-2 text-[11px] text-slate-500 dark:text-gray-400">{project.time}</div>

              {project.status && (
                <div className="mb-2 flex items-center gap-1">
                  <span
                    className={cn(
                      'h-1.5 w-1.5 rounded-full',
                      project.status === 'Urgent'
                        ? 'bg-red-500'
                        : project.status === 'Moyen'
                        ? 'bg-orange-500'
                        : project.status === 'Faible'
                        ? 'bg-green-500'
                        : 'bg-slate-500'
                    )}
                  />
                  <span className="text-[11px]">{project.status}</span>
                </div>
              )}

              <h4 className="mb-1 text-sm font-semibold">{project.title}</h4>
              {project.description && (
                <p className="mb-3 text-[11px] text-slate-500 dark:text-gray-300">{project.description}</p>
              )}

              {(project.team || project.duration || project.comments) && (
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 dark:text-gray-400">
                  <div className="flex items-center gap-3">
                    {project.team && (
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{project.team}</span>
                      </div>
                    )}
                    {project.duration && <span>{project.duration}</span>}
                  </div>
                  {project.comments && (
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <MessageSquare size={12} />
                        <span>{project.comments}</span>
                      </div>
                      {project.attachments && (
                        <div className="flex items-center gap-1">
                          <Paperclip size={12} />
                          <span>{project.attachments}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-slate-900 shadow-sm dark:border-gray-800 dark:bg-[#0f0f0f] dark:text-white sm:p-6">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-semibold">Chantiers hebdomadaires</h3>
        <button className="flex items-center gap-2 rounded-lg border border-slate-200/70 px-3 py-1.5 text-xs text-slate-600 transition hover:bg-slate-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800/60">
          <Filter size={14} />
          Filtrer
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 sm:hidden">{days.map((day) => renderDay('compact', day))}</div>

      <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-5">{days.map((day) => renderDay('full', day))}</div>
    </div>
  );
}

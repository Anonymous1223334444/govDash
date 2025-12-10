"use client";

import dynamic from 'next/dynamic';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, MapPin, Users } from 'lucide-react';

const WorldMap = dynamic(() => import('@/components/world-map'), { ssr: false });

const events = [
  {
    day: 'Lundi',
    date: '17 février',
    sessions: [
      { hour: '08:30', label: 'Brief stratégique – Présidence', location: 'Yaoundé', team: 'Cellule IA' },
      { hour: '14:00', label: 'Visite délégation Banque Africaine', location: 'Minfi', team: 'Relations ext.' },
    ],
  },
  {
    day: 'Mardi',
    date: '18 février',
    sessions: [
      { hour: '10:00', label: 'Mission terrain – Bertoua', location: 'Est', team: 'Data Lab' },
      { hour: '18:30', label: 'Débrief IA citoyenne', location: 'Virtuel', team: 'Task Force' },
    ],
  },
  {
    day: 'Mercredi',
    date: '19 février',
    sessions: [
      { hour: '09:00', label: 'Sommet Afrique IA', location: 'Abuja', team: 'MinPostel' },
      { hour: '16:00', label: 'Préparation voyage Canada', location: 'SGG', team: 'Cabinet' },
    ],
  },
];

export function CalendrierTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="space-y-6 lg:col-span-5">
        <Card className="border-slate-200/70 bg-white/90 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-900 dark:text-white">
              <CalendarDays className="h-5 w-5 text-indigo-300" /> Agenda prioritaire
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.map((event) => (
              <div key={event.day} className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-gray-400">
                  <span className="font-semibold text-slate-900 dark:text-white">{event.day}</span>
                  <span>{event.date}</span>
                </div>
                <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-gray-300">
                  {event.sessions.map((session) => (
                    <div
                      key={session.label}
                      className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200/70 bg-white px-3 py-2 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white"
                    >
                      <span className="font-semibold">{session.hour}</span>
                      <span className="flex-1 text-slate-600 dark:text-gray-300">{session.label}</span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-gray-400">
                        <MapPin className="h-3 w-3" /> {session.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-gray-400">
                        <Users className="h-3 w-3" /> {session.team}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-7">
        <WorldMap />
      </div>
    </div>
  );
}

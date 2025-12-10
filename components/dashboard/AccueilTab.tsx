'use client';

import { TodaysTasksWidget } from '@/components/dashboard/TodaysTasksWidget';
import { TodaysMeetingsWidget } from '@/components/dashboard/TodaysMeetingsWidget';
import { ProjectsCalendar } from '@/components/dashboard/ProjectsCalendar';
import { ActivityWidget } from '@/components/dashboard/ActivityWidget';
import { ProjectsWorkedWidget } from '@/components/dashboard/ProjectsWorkedWidget';
import { RemindersWidget } from '@/components/dashboard/RemindersWidget';

export function AccueilTab() {
  return (
    <div className="grid gap-4 sm:gap-6">
      {/* Widgets en haut - 2 colonnes sur mobile, reste pareil sur desktop */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <TodaysTasksWidget />
        <TodaysMeetingsWidget />
      </div>

      {/* Calendrier en pleine largeur */}
      <ProjectsCalendar />

      {/* Widgets du bas - 1 colonne sur mobile, 3 colonnes sur tablette+ */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ActivityWidget />
        <ProjectsWorkedWidget />
        <RemindersWidget />
      </div>
    </div>
  );
}